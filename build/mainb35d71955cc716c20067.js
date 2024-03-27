/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/burger-menu.svg */ "./src/assets/icons/burger-menu.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/logo.png */ "./src/assets/images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/basket.svg */ "./src/assets/icons/basket.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/catalog-header.png */ "./src/assets/images/catalog-header.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <header class=\"header\">\n        <div class=\"container\">\n            <div class=\"header__flex\">\n                <nav class=\"navigation\">\n                    <a href=\"#\" data-catalog class=\"navigation__links\">Каталог</a>\n                    <a href=\"#\" class=\"navigation__links\">Знижки</a>\n                    <a href=\"#\" class=\"navigation__links\">Блог</a>\n                    <a href=\"#\" class=\"navigation__links\">Про нас</a>\n                 </nav>\n                 <button class=\"header__burger\">\n                    <img class=\"header__burger-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"burger-menu\" >\n                 </button>\n                 <a href=\"/\" class=\"logo\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"logo\" class=\"logo__item\">\n                 </a>\n                 <div class=\"header-manipulation\">\n                    <select class=\"header-manipulation__select header-manipulation__select--lang\">\n                        <option value=\"UA\">UA</option>\n                        <option value=\"ENG\">ENG</option>\n                        <option value=\"DE\">DE</option>\n                    </select>\n                    <select class=\"header-manipulation__select header-manipulation__select--money\">\n                        <option value=\"GRN\">ГРН</option>\n                        <option value=\"USD\">USD</option>\n                        <option value=\"EUR\">EUR</option>\n                    </select>\n                   \n                    <a href=\"tel:+380978889292\" class=\"header-manipulation__number \">+38 097 888 92 92</a>\n                    <a href=\"#\" class=\"header-manipulation__basket\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"basket\">\n                    </a>\n                 </div>\n                <div class=\"header-catalog\">\n                    <div class=\"header-catalog__left\">\n                        <ul class=\"header-catalog-window-list\">\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"woman\">жінкам</a></li>\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"man\">чоловікам</a></li>\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"child\">дітям</a></li>\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"accessories\">аксесуари</a></li>\n                            <li><a href=\"/\" class=\"header-catalog-window-list__item\" data-category=\"house\">дім</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"header-catalog__right\">\n                        <ul class=\"header-catalog-window-sublist\">\n                        </ul>\n                    </div>\n                    <img class=\"header-catalog__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"catalog-header\">\n                </div>\n                <div class=\"mobile-menu\">\n                    <nav class=\"navigation navigation--mobile\">\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Каталог</a>\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Знижки</a>\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Блог</a>\n                        <a href=\"#\" class=\"navigation__links navigation__links--mobile\">Про нас</a>\n                     </nav>\n                     <div class=\"mobile-menu__choose-flex\">\n                        <form>\n                            <input type=\"radio\" id=\"ua\" name=\"choose-language\" value=\"UA\" checked>\n                            <label class=\"mobile-menu__choose-value\" for=\"ua\">UA</label>\n                            <input type=\"radio\" id=\"eng\" name=\"choose-language\" value=\"ENG\">\n                            <label class=\"mobile-menu__choose-value\" for=\"eng\">ENG</label>\n                            <input type=\"radio\" id=\"deu\" name=\"choose-language\" value=\"DE\">\n                            <label class=\"mobile-menu__choose-value\" for=\"deu\">DE</label>\n                         </form>\n                         <div class=\"mobile-menu__line\"></div>\n                         <form>\n                            <input type=\"radio\" id=\"grn\" name=\"choose-currency\" value=\"GRN\" checked>\n                            <label class=\"mobile-menu__choose-value\" for=\"grn\">ГРН</label>\n                            <input type=\"radio\" id=\"usd\" name=\"choose-currency\" value=\"USD\">\n                            <label class=\"mobile-menu__choose-value\" for=\"usd\">USD</label>\n                            <input type=\"radio\" id=\"eur\" name=\"choose-currency\" value=\"EUR\">\n                            <label class=\"mobile-menu__choose-value\" for=\"eur\">EUR</label>\n                         </form>\n                     </div>\n                </div>\n            </div>\n    </header>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/mobile-menu.ts":
/*!*******************************!*\
  !*** ./src/ts/mobile-menu.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cross_svg_1 = __importDefault(__webpack_require__(/*! ../assets/icons/cross.svg */ "./src/assets/icons/cross.svg"));
const burger_menu_svg_1 = __importDefault(__webpack_require__(/*! ../assets/icons/burger-menu.svg */ "./src/assets/icons/burger-menu.svg"));
const burgerIcon = document.querySelector('.header__burger');
const imgBurgerIcon = document.querySelector('.header__burger-img');
const mobileMenu = document.querySelector('.mobile-menu');
let isMenuOpen = false;
const arrPathImgIcon = [
    burger_menu_svg_1.default,
    cross_svg_1.default
];
function changeBurgerIcon() {
    burgerIcon === null || burgerIcon === void 0 ? void 0 : burgerIcon.classList.add('header__burger--open');
    setTimeout(() => {
        if (imgBurgerIcon) {
            imgBurgerIcon.src = arrPathImgIcon[isMenuOpen ? 0 : 1];
            isMenuOpen = !isMenuOpen;
            burgerIcon === null || burgerIcon === void 0 ? void 0 : burgerIcon.classList.remove('header__burger--open');
        }
    }, 400);
}
function openMobileMenu() {
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.toggle('mobile-menu--open');
}
function closeMobileMenu() {
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        if (!target.className.includes('header__burger') && !target.className.includes('mobile-menu')) {
            if (mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.contains('mobile-menu--open')) {
                mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.remove('mobile-menu--open');
                changeBurgerIcon();
            }
        }
    });
}
burgerIcon === null || burgerIcon === void 0 ? void 0 : burgerIcon.addEventListener('click', () => {
    openMobileMenu();
    changeBurgerIcon();
});
closeMobileMenu();


/***/ }),

/***/ "./src/ts/show-catalog.ts":
/*!********************************!*\
  !*** ./src/ts/show-catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.catalogLink = void 0;
exports.catalogLink = document.querySelector('[data-catalog]');
const catalogBlock = document.querySelector('.header-catalog');
exports.catalogLink === null || exports.catalogLink === void 0 ? void 0 : exports.catalogLink.addEventListener('mouseover', () => {
    catalogBlock === null || catalogBlock === void 0 ? void 0 : catalogBlock.classList.add('header-catalog--active');
    exports.catalogLink === null || exports.catalogLink === void 0 ? void 0 : exports.catalogLink.classList.add('navigation__links--active');
    catalogBlock === null || catalogBlock === void 0 ? void 0 : catalogBlock.addEventListener('mouseleave', () => {
        catalogBlock === null || catalogBlock === void 0 ? void 0 : catalogBlock.classList.remove('header-catalog--active');
        exports.catalogLink === null || exports.catalogLink === void 0 ? void 0 : exports.catalogLink.classList.remove('navigation__links--active');
    });
});


/***/ }),

/***/ "./src/ts/wtiteSubcategory.ts":
/*!************************************!*\
  !*** ./src/ts/wtiteSubcategory.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const mainCategory = document.querySelectorAll('.header-catalog-window-list__item');
const subategoryBlock = document.querySelector('.header-catalog-window-sublist');
const subCategories = {
    woman: ['Вишиті сукні', 'Жіночі вишиванки', 'Світшоти та светри', 'Футболки', 'Брюки та комбінезони', 'Пальта та куртки', 'Спідниці'],
    man: ['Футболки', 'Шорти', 'Брюки', 'Светери'],
    child: ['шапочки', 'футболки', 'взуття', 'колготи'],
    house: ['столи', 'шафи', 'дзеркала', 'електрика', 'ковдри'],
    accessories: ['годинники', 'плакати'],
};
//function for search necessary key in object and then  create current subcategories list
function searchKeyInObject(obj, necessaryKey, subategoryBlock) {
    for (let objectKey in obj) {
        if (necessaryKey === objectKey) {
            let arrSubcategories = obj[objectKey];
            subategoryBlock.innerHTML = '';
            for (let i = 0; i < arrSubcategories.length; i++) {
                const createdSubcategories = document.createElement('li');
                createdSubcategories.classList.add('header-catalog-window-sublist__item');
                createdSubcategories.textContent = arrSubcategories[i];
                subategoryBlock.appendChild(createdSubcategories);
            }
        }
    }
}
// already main function for create current subcategories list
function writeCategories() {
    mainCategory.forEach(categoryItem => {
        categoryItem.addEventListener('mouseenter', (e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.category) {
                let currentDataCategory = e.target.dataset.category;
                if (subategoryBlock) {
                    searchKeyInObject(subCategories, currentDataCategory, subategoryBlock);
                }
            }
        });
    });
}
writeCategories();


/***/ }),

/***/ "./src/assets/icons/basket.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/basket.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/basket.svg";

/***/ }),

/***/ "./src/assets/icons/burger-menu.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/burger-menu.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/burger-menu.svg";

/***/ }),

/***/ "./src/assets/icons/cross.svg":
/*!************************************!*\
  !*** ./src/assets/icons/cross.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/cross.svg";

/***/ }),

/***/ "./src/assets/images/catalog-header.png":
/*!**********************************************!*\
  !*** ./src/assets/images/catalog-header.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/catalog-header.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.html */ "./src/index.html");
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
__webpack_require__(/*! ./ts/show-catalog */ "./src/ts/show-catalog.ts");
__webpack_require__(/*! ./ts/wtiteSubcategory */ "./src/ts/wtiteSubcategory.ts");
__webpack_require__(/*! ./ts/mobile-menu */ "./src/ts/mobile-menu.ts");

})();

/******/ })()
;
//# sourceMappingURL=mainb35d71955cc716c20067.js.map