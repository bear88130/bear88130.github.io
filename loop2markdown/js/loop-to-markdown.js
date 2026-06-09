/*!
 * loop-to-markdown.js
 * 將 Microsoft Loop（Scriptor 編輯器）複製出來的 HTML 轉成 Markdown。
 * 規則依據 test/loop-to-markdown-spec.md。
 *
 * 用法（瀏覽器）：LoopToMarkdown.convert(htmlString)
 * 用法（Node 測試）：LoopToMarkdown.convert(htmlString, JSDOMDOMParser)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.LoopToMarkdown = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ---- 行內文字：合併碎片、還原實體、收斂空白 ----
  function normalizeText(s) {
    return (s || '')
      .replace(/ /g, ' ') // &nbsp; → 半形空白
      .replace(/\s+/g, ' ')    // 連續空白收斂為一
      .trim();
  }

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }

  function directChildren(el, tags) {
    var set = tags.split(',');
    return toArray(el.children).filter(function (c) {
      return set.indexOf(c.tagName.toLowerCase()) !== -1;
    });
  }

  // ---- 表格 ----
  function cellText(td) {
    // 找出「葉節點 div」（本身不再含 div），支援單格內多行
    var leaves = toArray(td.querySelectorAll('div')).filter(function (d) {
      return !d.querySelector('div');
    });
    var text;
    if (leaves.length) {
      text = leaves
        .map(function (d) { return normalizeText(d.textContent); })
        .filter(function (t) { return t !== ''; })
        .join(' <br> ');
    } else {
      text = normalizeText(td.textContent);
    }
    return text.replace(/\|/g, '\\|');
  }

  function makeTable(table) {
    var headRow = table.querySelector('thead tr');
    var cellEls = function (tr) {
      return toArray(tr.children).filter(function (c) {
        return c.tagName === 'TD' || c.tagName === 'TH';
      });
    };
    var headers = headRow ? cellEls(headRow).map(cellText) : [];
    var rows = toArray(table.querySelectorAll('tbody tr')).map(function (tr) {
      return cellEls(tr).map(cellText);
    });
    return { type: 'table', headers: headers, rows: rows };
  }

  function renderTable(b) {
    var cols = b.headers.length || (b.rows[0] ? b.rows[0].length : 0);
    if (!cols) return [];
    var norm = function (r) {
      var out = r.slice(0, cols);
      while (out.length < cols) out.push('');
      return out;
    };
    var cell = function (c) { return c === '' ? ' ' : ' ' + c + ' '; };
    var row = function (cells) { return '|' + norm(cells).map(cell).join('|') + '|'; };
    var out = [];
    out.push(row(b.headers));
    out.push('|' + new Array(cols + 1).join('---|'));
    b.rows.forEach(function (r) { out.push(row(r)); });
    return out;
  }

  // ---- 清單（支援巢狀、有序/無序、核取清單）----
  function liOwnText(li) {
    // 只取 li 自身文字，排除巢狀的 ul / ol
    var parts = [];
    toArray(li.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        parts.push(node.textContent);
      } else if (node.nodeType === 1) {
        var t = node.tagName.toLowerCase();
        if (t === 'ul' || t === 'ol') return;
        parts.push(node.textContent);
      }
    });
    return normalizeText(parts.join(''));
  }

  // 回傳 [{ text, hard }]；hard 表示此行為核取清單項（非最後一行需加硬換行）
  function renderList(listEl, level) {
    var ordered = listEl.tagName.toLowerCase() === 'ol';
    var out = [];
    directChildren(listEl, 'li').forEach(function (li) {
      var cls = li.className || '';
      var isCheck = /scriptor-listItem-marker-value-/.test(cls);
      var marker;
      if (isCheck) {
        marker = /marker-value-checked/.test(cls) ? '[x] ' : '[] ';
      } else if (ordered) {
        marker = '1. ';
      } else {
        marker = '- ';
      }
      out.push({ text: new Array(level + 1).join('  ') + marker + liOwnText(li), hard: isCheck });
      directChildren(li, 'ul,ol').forEach(function (sub) {
        renderList(sub, level + 1).forEach(function (l) { out.push(l); });
      });
    });
    return out;
  }

  // ---- 走訪 DOM，產出區塊清單 ----
  function collectBlocks(root) {
    var blocks = [];

    function walk(node) {
      toArray(node.childNodes).forEach(function (child) {
        if (child.nodeType !== 1) return; // 只處理元素節點
        var tag = child.tagName.toLowerCase();

        if (/^h[1-6]$/.test(tag)) {
          blocks.push({ type: 'heading', level: parseInt(tag[1], 10), text: normalizeText(child.textContent) });
        } else if (tag === 'ul' || tag === 'ol') {
          blocks.push({ type: 'list', lines: renderList(child, 0) });
        } else if (tag === 'table') {
          blocks.push(makeTable(child));
        } else if (tag === 'hr') {
          /* Loop 章節分隔線，略過 */
        } else if (tag === 'br') {
          blocks.push({ type: 'blank' });
        } else if (tag === 'style' || tag === 'script') {
          /* 略過 */
        } else if (tag === 'div') {
          var table = child.querySelector('table');
          if (table) {
            blocks.push(makeTable(table));
          } else if (child.querySelector('div, hr, ul, ol')) {
            walk(child); // 純包裝 div
          } else {
            var txt = normalizeText(child.textContent);
            if (txt) blocks.push({ type: 'para', text: txt });
          }
        } else if (tag === 'span') {
          walk(child); // 包裝用 span
        } else {
          walk(child);
        }
      });
    }

    walk(root);
    return blocks;
  }

  // ---- 區塊清單 → Markdown 字串 ----
  function render(blocks) {
    var md = [];
    var ensureBlank = function () {
      if (md.length && md[md.length - 1] !== '') md.push('');
    };
    blocks.forEach(function (b) {
      switch (b.type) {
        case 'heading':
          md.push('#'.repeat(b.level) + ' ' + b.text);
          break;
        case 'list':
          ensureBlank();
          b.lines.forEach(function (l, i) {
            var last = i === b.lines.length - 1;
            md.push(l.text + (l.hard && !last ? '  ' : ''));
          });
          md.push('');
          break;
        case 'table':
          ensureBlank();
          renderTable(b).forEach(function (l) { md.push(l); });
          md.push('');
          break;
        case 'para':
          md.push(b.text);
          break;
        case 'blank':
          ensureBlank();
          break;
      }
    });
    // 去除結尾多餘空行，補單一換行
    while (md.length && md[md.length - 1] === '') md.pop();
    return md.join('\n') + '\n';
  }

  function convert(html, DOMParserImpl) {
    var DP = DOMParserImpl || (typeof DOMParser !== 'undefined' ? DOMParser : null);
    if (!DP) throw new Error('找不到可用的 DOMParser');
    var doc = new DP().parseFromString(String(html), 'text/html');
    return render(collectBlocks(doc.body));
  }

  return { convert: convert };
});
