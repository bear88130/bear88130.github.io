(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbody {\n  font-family: Microsoft JhengHei;\n  font-size: 16px; }\nbody ::-webkit-scrollbar {\n    width: 20px; }\nbody ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px; }\nbody ::-webkit-scrollbar-thumb {\n    background: grey;\n    border-radius: 10px; }\nbody ::-webkit-scrollbar-thumb:hover {\n    background: grey; }\n.logo {\n  text-align: center;\n  background-color: black;\n  padding: 16px 0; }\n.logo span {\n    font-family: Roboto-BlackItalic;\n    font-size: 36px;\n    font-weight: bold;\n    color: #50FF44; }\n.title {\n  text-align: center;\n  background-color: black;\n  padding: 8px 0;\n  margin: 0 0 16px 0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px; }\n.title span {\n    font-family: white;\n    font-size: 36px;\n    font-weight: bold;\n    color: #50FF44; }\n.introduction {\n  padding-top: 28px; }\n.introduction .cover {\n    min-height: 350px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-left: 4px solid black;\n    border-right: 4px solid black; }\n.introduction .content {\n    margin-left: 24px; }\n.introduction .fieldName {\n    margin: 4px 0;\n    font-family: Roboto-Bold;\n    font-size: 16px;\n    color: black;\n    line-height: 24px;\n    font-weight: bold; }\n.introduction .fieldContent {\n    margin: 4px 0;\n    font-family: Roboto-Regular;\n    font-size: 16px;\n    color: black;\n    line-height: 24px; }\n.chapters {\n  padding-top: 28px; }\n.chapters .title-block {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px;\n    height: 50px;\n    width: 160px;\n    text-align: center;\n    background-color: black;\n    padding: 8px 8px; }\n.chapters .title-block span {\n      font-family: white;\n      font-size: 24px;\n      font-weight: bold;\n      color: white; }\n.chapters .item-block {\n    border: 4px solid black;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    border-top-right-radius: 4px; }\n.chapters .item-block .item {\n      background-color: rgba(255, 255, 255, 0);\n      padding: 8px 24px;\n      font-weight: bold;\n      -webkit-font-smoothing: antialiased;\n      font-family: Roboto-Bold;\n      font-size: 16px;\n      color: black;\n      line-height: 24px; }\n.chapters .item-block .item a {\n        color: black;\n        text-decoration: none; }\n.chapters .item-block .item a:hover {\n          color: white; }\n.chapters .item-block .item:hover {\n        background-color: black;\n        color: white; }\n.chapters .item-block .item:hover a {\n          color: white; }\n.item .highNews::after {\n  content: 'News';\n  padding: 2px 4px;\n  border-radius: 4px;\n  background-color: #50FF44;\n  margin-left: 20px;\n  color: black;\n  text-align: center;\n  -webkit-animation-name: changeLight;\n          animation-name: changeLight;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n@-webkit-keyframes changeLight {\n  0% {\n    background-color: #50FF44; }\n  50% {\n    background-color: #afffaa; }\n  100% {\n    background-color: #50FF44; } }\n@keyframes changeLight {\n  0% {\n    background-color: #50FF44; }\n  50% {\n    background-color: #afffaa; }\n  100% {\n    background-color: #50FF44; } }\n.switch {\n  position: relative;\n  top: 5px;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin-bottom: 0; }\n.switch input {\n  display: none; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #50FF44;\n  transition: 1s; }\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 1s; }\ninput:checked + .slider {\n  background-color: black; }\ninput:focus + .slider {\n  box-shadow: 0 0 1px black; }\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n.slider.round {\n  border-radius: 34px; }\n.slider.round:before {\n  border-radius: 50%; }\n.black-select {\n  position: relative;\n  font-family: Arial; }\n.black-select select {\n  display: block; }\n.select-selected {\n  background-color: white; }\n.select-selected:after {\n  position: absolute;\n  content: \"\";\n  top: 14px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-color: black transparent transparent transparent; }\n.select-selected.select-arrow-active:after {\n  border-color: transparent transparent black transparent;\n  top: 7px; }\n.select-items div {\n  color: black;\n  padding: 8px 16px;\n  border: 1px solid black;\n  cursor: pointer; }\n.select-selected {\n  color: black;\n  padding: 8px 16px;\n  border: 1px solid black;\n  cursor: pointer; }\n.select-items {\n  position: absolute;\n  background-color: white;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99; }\n.select-hide {\n  display: none; }\n.select-items div:hover,\n.same-as-selected {\n  background-color: rgba(0, 0, 0, 0.1); }\n.read {\n  margin-top: 24px; }\n.read-title {\n  font-family: Roboto-Bold;\n  padding: 8px 15px;\n  font-size: 20px;\n  font-weight: bolder; }\n.read-title a {\n    color: black;\n    text-decoration: none; }\n.read-title a:hover {\n      color: black; }\n.picture img {\n  width: 100%; }\n.next-block:hover {\n  background-color: black; }\n.next-block .next {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  color: #adadad; }\n.next-block .next:hover {\n    color: #50FF44; }\n.pre-block:hover {\n  background-color: black; }\n.pre-block .pre {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n  color: #adadad; }\n.pre-block .pre:hover {\n    color: #50FF44; }\n.thumb {\n  display: flex;\n  height: 280px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  margin-top: 24px; }\n.thumb div {\n    flex: 1;\n    text-align: center;\n    padding: 0 15px; }\n.thumb div img {\n      height: 200px;\n      opacity: .3; }\n.thumb div span {\n      display: block;\n      font-size: 18px;\n      font-weight: bolder; }\n.thumb div::before {\n      position: relative;\n      top: 20px;\n      content: \"\";\n      width: 0px;\n      height: 0px;\n      border: 10px solid transparent;\n      border-color: transparent transparent transparent transparent; }\n.thumb-selected span,\n.thumb div:hover span {\n  display: block;\n  opacity: 0; }\n.thumb-selected a img,\n.thumb div:hover a img {\n  opacity: 1;\n  border: 4px solid black; }\n.thumb-selected::before,\n.thumb div:hover::before {\n  position: relative;\n  top: 20px;\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  border: 10px solid #000000;\n  border-color: transparent transparent #000000 transparent; }\nselect {\n  height: 40px;\n  width: 150px;\n  border-radius: 5px;\n  outline: none;\n  box-shadow: 1px 1px 3px 2px rgba(235, 235, 235, 0.5) inset; }\n/* 桌機 */\n@media (min-width: 992px) {\n  .read-title {\n    text-align: center; }\n  .changeRight2Left {\n    justify-content: flex-end; }\n  .i-size {\n    font-size: 48px; } }\n/* 平板 */\n@media (min-width: 768px) and (max-width: 991px) {\n  .read-title {\n    text-align: left; }\n  .changeRight2Left {\n    justify-content: flex-start; }\n  .i-size {\n    font-size: 24px; } }\n/* 手機 */\n@media (max-width: 767px) {\n  .read-title {\n    text-align: left; }\n  .changeRight2Left {\n    justify-content: flex-start; }\n  .i-size {\n    font-size: 14px; } }\n/* For320px */\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\commic\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map