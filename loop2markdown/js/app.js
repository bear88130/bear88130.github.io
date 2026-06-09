/* app.js — EasyMDE 初始化、貼上攔截與工具列行為 */
(function () {
  'use strict';

  var easymde = new EasyMDE({
    element: document.getElementById('editor'),
    autofocus: true,
    spellChecker: false,
    autoDownloadFontAwesome: true,
    placeholder: '在這裡貼上 Loop 內容（Ctrl+V）…',
    status: ['lines', 'words'],
    toolbar: [
      'bold', 'italic', 'heading', '|',
      'unordered-list', 'ordered-list', 'table', '|',
      'preview', 'side-by-side', 'fullscreen', '|',
      'guide'
    ],
    renderingConfig: { singleLineBreaks: false }
  });

  var statusEl = document.getElementById('status');
  var statusTimer = null;
  function flash(msg, isError) {
    statusEl.textContent = msg;
    statusEl.classList.toggle('error', !!isError);
    if (statusTimer) clearTimeout(statusTimer);
    statusTimer = setTimeout(function () { statusEl.textContent = ''; }, 2600);
  }

  // 判斷剪貼簿 HTML 是否來自 Loop（Scriptor）
  function looksLikeLoop(html) {
    return /ScriptorStartFragment|fluid-config-type|fluid-data-type|attribution=/.test(html);
  }

  function insertMarkdown(md) {
    var cm = easymde.codemirror;
    cm.replaceSelection(md);
    cm.focus();
  }

  // ---- 貼上攔截：偵測到 Loop 內容就轉換，否則維持原生貼上 ----
  easymde.codemirror.on('paste', function (cm, e) {
    var cd = e.clipboardData || window.clipboardData;
    if (!cd) return;
    var html = cd.getData('text/html');
    if (html && looksLikeLoop(html)) {
      e.preventDefault();
      try {
        insertMarkdown(LoopToMarkdown.convert(html));
        flash('已轉換 Loop 內容 ✓');
      } catch (err) {
        flash('轉換失敗：' + err.message, true);
      }
    }
  });

  // ---- 從剪貼簿主動讀取（需瀏覽器支援 Clipboard API 與權限）----
  document.getElementById('btn-paste').addEventListener('click', function () {
    if (!navigator.clipboard || !navigator.clipboard.read) {
      flash('此瀏覽器不支援主動讀取剪貼簿，請改用 Ctrl+V 貼上', true);
      return;
    }
    navigator.clipboard.read().then(function (items) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].types.indexOf('text/html') !== -1) {
          return items[i].getType('text/html').then(function (blob) { return blob.text(); });
        }
      }
      throw new Error('剪貼簿沒有 HTML 內容');
    }).then(function (html) {
      if (!html) return;
      if (!looksLikeLoop(html)) {
        flash('剪貼簿內容看起來不是 Loop 格式，仍嘗試轉換', true);
      }
      insertMarkdown(LoopToMarkdown.convert(html));
      flash('已轉換 Loop 內容 ✓');
    }).catch(function (err) {
      flash('讀取剪貼簿失敗：' + err.message + '（可改用 Ctrl+V）', true);
    });
  });

  // ---- 複製 Markdown ----
  document.getElementById('btn-copy').addEventListener('click', function () {
    var text = easymde.value();
    if (!text) { flash('編輯區是空的', true); return; }
    var done = function () { flash('已複製 Markdown ✓'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function (err) {
        flash('複製失敗：' + err.message, true);
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { flash('複製失敗', true); }
      document.body.removeChild(ta);
    }
  });

  // ---- 下載 .md ----
  document.getElementById('btn-download').addEventListener('click', function () {
    var text = easymde.value();
    if (!text) { flash('編輯區是空的', true); return; }
    var blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'loop-' + new Date().toISOString().slice(0, 10) + '.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    flash('已下載 ✓');
  });

  // ---- 清空 ----
  document.getElementById('btn-clear').addEventListener('click', function () {
    if (easymde.value() && !confirm('確定要清空編輯區？')) return;
    easymde.value('');
    easymde.codemirror.focus();
  });
})();
