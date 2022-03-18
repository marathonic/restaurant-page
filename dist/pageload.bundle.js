/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nbody {\n    margin: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n\n}\n\n.header-bar {\n    display: flex;\n    background-color: var(--cool-mustard);\n    grid-column: 2;\n    border-radius: 16px;\n}\n\n/* .header-bg {\n} */\n\n.separator-div {\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 37px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-mustard);\n    border-radius: 21px;\n}\n\n.container {\n    min-width: auto;\n    padding-top: 50px;\n    margin: 0 auto;\n}\n\n.main-header .container {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n    text-align: center;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n\n.main-nav a {\n    display: inline-block;\n    margin: 10px;\n    color: rebeccapurple;\n    font-weight: bold;\n}\n\n.main-nav a:hover {\n    cursor: pointer;\n    color: crimson;\n\n}\n\n.main-nav a:last-child {\n    padding-right: 20px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.menu-grid-bg {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.menu-right {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: whitesmoke;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n.menu-left {\n    grid-column: 1;\n    grid-row: 1 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 27px;\n}\n\n.menu-left > img {\n    border-radius: 12px;\n    max-width: 189px;\n    max-height: 77px;\n    margin-top: 20px;\n}\n\n.menu-left > img:hover {\n    filter: brightness(110%);\n    filter: opacity(70%);\n    cursor: pointer;\n}\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n    border-bottom: solid whitesmoke 3px;\n    border-right: solid whitesmoke 3px;\n    box-shadow: 1px 4px 4px gainsboro;\n}\n\n.food-grid-outer {\n    background-color: whitesmoke;\n    grid-row: 2;\n    margin-top: 15px;\n    padding: 20px;\n}\n\n.food-grid-inner {\n    background-color: var(--cool-beige);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: 3px;\n    padding-bottom: 10px;\n    flex-wrap: wrap;\n    border-radius: 4px;\n\n}\n\n.food-grid-inner > img {\n    margin: 2px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 3px;\n    z-index: 3;\n}\n\n.food-grid-inner > img:hover {\n    cursor: pointer;\n}\n\n.svg {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n/* WE'RE TESTING HOW WE'RE GOING TO APPLY THE IMAGES\nTO THE DISH DIVS. GYUMESHI WITH CSS, THE REST WITH JS */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;IACnC,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,mCAAmC;IACnC,kCAAkC;;AAEtC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,mBAAmB;AACvB;;AAEA;GACG;;AAEH;IACI,cAAc;IACd,WAAW;IACX,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;;;GAMG;;;AAGH;IACI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;AACnB;;;AAGA;IACI,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,qBAAqB;IACrB,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,cAAc;;AAElB;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;;;;;;;;;;;CAWC;;AAED;IACI,uBAAuB;IACvB,WAAW;IACX,qCAAqC;IACrC,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,4BAA4B;IAC5B,oIAAoI;IACpI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,mCAAmC;IACnC,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;uDACuD","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nbody {\n    margin: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n\n}\n\n.header-bar {\n    display: flex;\n    background-color: var(--cool-mustard);\n    grid-column: 2;\n    border-radius: 16px;\n}\n\n/* .header-bg {\n} */\n\n.separator-div {\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 37px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-mustard);\n    border-radius: 21px;\n}\n\n.container {\n    min-width: auto;\n    padding-top: 50px;\n    margin: 0 auto;\n}\n\n.main-header .container {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n    text-align: center;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n\n.main-nav a {\n    display: inline-block;\n    margin: 10px;\n    color: rebeccapurple;\n    font-weight: bold;\n}\n\n.main-nav a:hover {\n    cursor: pointer;\n    color: crimson;\n\n}\n\n.main-nav a:last-child {\n    padding-right: 20px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.menu-grid-bg {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.menu-right {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: whitesmoke;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n.menu-left {\n    grid-column: 1;\n    grid-row: 1 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 27px;\n}\n\n.menu-left > img {\n    border-radius: 12px;\n    max-width: 189px;\n    max-height: 77px;\n    margin-top: 20px;\n}\n\n.menu-left > img:hover {\n    filter: brightness(110%);\n    filter: opacity(70%);\n    cursor: pointer;\n}\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n    border-bottom: solid whitesmoke 3px;\n    border-right: solid whitesmoke 3px;\n    box-shadow: 1px 4px 4px gainsboro;\n}\n\n.food-grid-outer {\n    background-color: whitesmoke;\n    grid-row: 2;\n    margin-top: 15px;\n    padding: 20px;\n}\n\n.food-grid-inner {\n    background-color: var(--cool-beige);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: 3px;\n    padding-bottom: 10px;\n    flex-wrap: wrap;\n    border-radius: 4px;\n\n}\n\n.food-grid-inner > img {\n    margin: 2px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 3px;\n    z-index: 3;\n}\n\n.food-grid-inner > img:hover {\n    cursor: pointer;\n}\n\n.svg {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n/* WE'RE TESTING HOW WE'RE GOING TO APPLY THE IMAGES\nTO THE DISH DIVS. GYUMESHI WITH CSS, THE REST WITH JS */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/menu-eng/bowl.png":
/*!***********************************!*\
  !*** ./src/img/menu-eng/bowl.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c8015ba101c123dcea4.png";

/***/ }),

/***/ "./src/img/menu-eng/curry.png":
/*!************************************!*\
  !*** ./src/img/menu-eng/curry.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd046defc04dc1f4ba88.png";

/***/ }),

/***/ "./src/img/menu-eng/drinks.png":
/*!*************************************!*\
  !*** ./src/img/menu-eng/drinks.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "910d001146d070e6f935.png";

/***/ }),

/***/ "./src/img/menu-eng/gyumeshi.jpg":
/*!***************************************!*\
  !*** ./src/img/menu-eng/gyumeshi.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c07d30f9f3779e3a9c7b.jpg";

/***/ }),

/***/ "./src/img/menu-eng/morning-meals.png":
/*!********************************************!*\
  !*** ./src/img/menu-eng/morning-meals.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7adcc8e01ace31454278.png";

/***/ }),

/***/ "./src/img/menu-eng/set-meals.png":
/*!****************************************!*\
  !*** ./src/img/menu-eng/set-meals.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2724cb0e5cb4b795797.png";

/***/ }),

/***/ "./src/img/menu-eng/side-dishes.png":
/*!******************************************!*\
  !*** ./src/img/menu-eng/side-dishes.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39122799291592d271b0.png";

/***/ }),

/***/ "./src/img/menu-eng/toppings.png":
/*!***************************************!*\
  !*** ./src/img/menu-eng/toppings.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eced2d76cf0316e611b7.png";

/***/ }),

/***/ "./src/img/menu-select/en.jpg":
/*!************************************!*\
  !*** ./src/img/menu-select/en.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "402c7c33e86b8acf1670.jpg";

/***/ }),

/***/ "./src/img/menu-select/kor.jpg":
/*!*************************************!*\
  !*** ./src/img/menu-select/kor.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "515eb1e08b69486db0b9.jpg";

/***/ }),

/***/ "./src/matsuya-logo.gif":
/*!******************************!*\
  !*** ./src/matsuya-logo.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "709e22c565083bb25b52.gif";

/***/ }),

/***/ "./src/ramen-icon.png":
/*!****************************!*\
  !*** ./src/ramen-icon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d930cc10b4de3347e07.png";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ramen_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramen-icon.png */ "./src/ramen-icon.png");
/* harmony import */ var _matsuya_logo_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matsuya-logo.gif */ "./src/matsuya-logo.gif");
/* harmony import */ var _img_menu_eng_gyumeshi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu-eng/gyumeshi.jpg */ "./src/img/menu-eng/gyumeshi.jpg");
/* harmony import */ var _img_menu_eng_curry_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu-eng/curry.png */ "./src/img/menu-eng/curry.png");
/* harmony import */ var _img_menu_eng_bowl_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu-eng/bowl.png */ "./src/img/menu-eng/bowl.png");
/* harmony import */ var _img_menu_eng_set_meals_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu-eng/set-meals.png */ "./src/img/menu-eng/set-meals.png");
/* harmony import */ var _img_menu_eng_morning_meals_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu-eng/morning-meals.png */ "./src/img/menu-eng/morning-meals.png");
/* harmony import */ var _img_menu_eng_side_dishes_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu-eng/side-dishes.png */ "./src/img/menu-eng/side-dishes.png");
/* harmony import */ var _img_menu_eng_toppings_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/menu-eng/toppings.png */ "./src/img/menu-eng/toppings.png");
/* harmony import */ var _img_menu_eng_drinks_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/menu-eng/drinks.png */ "./src/img/menu-eng/drinks.png");
/* harmony import */ var _img_menu_select_en_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/menu-select/en.jpg */ "./src/img/menu-select/en.jpg");
/* harmony import */ var _img_menu_select_kor_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/menu-select/kor.jpg */ "./src/img/menu-select/kor.jpg");

















// WE MAY VERY WELL WISH TO SEPARATE THIS INTO 
// SEVERAL SMALLER FUNCTIONS, EACH APPENDING SOMETHING
// TO OUR BACKGROUND. THEN, RUN ALL THE FUNCTIONS IN INDEX.JS

function menu() {

    // alert('TEST');
    const content = document.createElement('div');
    document.body.appendChild(content);
    const background = document.createElement('div');

    //Navigation bar, or container
    // const headerBackground = document.createElement('div');
    //                     headerBackground.classList.add('header-bar');

    //the matsuya logo
    const matsuyaLogo = new Image();
    matsuyaLogo.src = _matsuya_logo_gif__WEBPACK_IMPORTED_MODULE_2__; 
    matsuyaLogo.classList.add('small-icon')


    //main header
    const mainHeader = document.createElement('header');
    mainHeader.classList.add('main-header');

    //container
    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(matsuyaLogo);

    //navigation bar
    const mainNav = document.createElement('nav');
    mainNav.classList.add('main-nav');
    
    const ulNav = document.createElement('ul');
    ulNav.classList.add('main-nav-list');
    
    const liNavOne = document.createElement('li');
    const menuNav = document.createElement('a');
    
    menuNav.id = 'menu-anchor';
    menuNav.innerHTML = 'Menu';

    liNavOne.appendChild(menuNav);
    ulNav.appendChild(liNavOne);
    
    const liNavTwo = document.createElement('li');
    const shopNav = document.createElement('a');

    shopNav.id = 'store-locator-anchor';
    shopNav.innerHTML = 'Store locator';

    liNavTwo.appendChild(shopNav);
    ulNav.appendChild(liNavTwo);

    
    const liNavThree = document.createElement('li');
    const companyNav = document.createElement('a');
    companyNav.innerHTML = 'Our company';
    liNavThree.appendChild(companyNav);
    ulNav.appendChild(liNavThree);
    
    const liNavFour = document.createElement('li');
    const investorNav = document.createElement('a');
    investorNav.innerHTML = 'Investor information';
    liNavFour.appendChild(investorNav);
    ulNav.appendChild(liNavFour);

    // const liNavFive = document.createElement('li');
    // const futureNav = document.createElement('a');
    // futureNav.innerHTML = 'Future development';
    // liNavFive.appendChild(futureNav);
    // ulNav.appendChild(liNavFive);
    
    mainNav.appendChild(ulNav);
    container.appendChild(mainNav);

    // const containerSections = document.createElement('div');
    // containerSections.classList.add('container-sections');
    // const containerMenu = document.createElement('p');
    // containerMenu.innerHTML = 'Menu';
    // containerSections.appendChild(containerMenu);
    // const containerStore = document.createElement('p');
    // containerStore.innerHTML = 'Store Locator';
    // containerSections.appendChild(containerStore);
   
   
    // const containerCompany = document.createElement('p');
    // const containerInvestors = document.createElement('p');
    // const containerFutureDev = document.createElement('p');

    //English menu separator
    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator-div');
    const ramenIcon = new Image();
    ramenIcon.src = _ramen_icon_png__WEBPACK_IMPORTED_MODULE_1__;
    ramenIcon.classList.add('small-icon');
    const menuLanguageText = document.createElement('p');
    menuLanguageText.innerHTML = 'English Menu';
    menuLanguageText.classList.add('menu-language-text');

    // //Menu divs
    const menuContainer = document.createElement('div');


    const menuLanguages = document.createElement('div');
    const menuCenterContainer = document.createElement('div');
    menuCenterContainer.classList.add('menu-center-container');
    
    const menuDiv = document.createElement('div');
    const menuCurrentLang = document.createElement('div');
    const menuGridItems = document.createElement('div');

    menuContainer.classList.add('menu-container');
    menuDiv.classList.add('menu-grid-bg');
    menuContainer.appendChild(menuDiv);
    const menuRightHalf = document.createElement('div');
    menuRightHalf.classList.add('menu-right');
    menuDiv.appendChild(menuRightHalf);

    const menuLefttHalf = document.createElement('div');
    menuLefttHalf.classList.add('menu-left');
    const englishMenu = new Image();
    englishMenu.src = _img_menu_select_en_jpg__WEBPACK_IMPORTED_MODULE_11__;

    const koreanMenu = new Image();
    koreanMenu.src = _img_menu_select_kor_jpg__WEBPACK_IMPORTED_MODULE_12__;
    
    const spanishMenu = document.createElement('div');

    menuLefttHalf.appendChild(englishMenu);
    menuLefttHalf.appendChild(koreanMenu);
    menuLefttHalf.appendChild(spanishMenu);
    menuDiv.appendChild(menuLefttHalf);

    //Selected menu language 
    const selectedMenuLanguage = document.createElement('div');
    selectedMenuLanguage.classList.add('selected-menu-lang');
    selectedMenuLanguage.innerHTML = 'English Menu';
    menuRightHalf.appendChild(selectedMenuLanguage);  
    
    //FOOD GRID! 
    const foodGridInner = document.createElement('div');
    foodGridInner.classList.add('food-grid-inner');

    const foodGridOuter = document.createElement('div');
    foodGridOuter.classList.add('food-grid-outer');

    const gyumeshi = new Image();
    gyumeshi.src = _img_menu_eng_gyumeshi_jpg__WEBPACK_IMPORTED_MODULE_3__;
    
    //TRYING OUT SECOND IMG METHOD
    const curry = new Image();
    curry.src = _img_menu_eng_curry_png__WEBPACK_IMPORTED_MODULE_4__;

    //THIS SECOND WAY LOOKS A LOT BETTER!


    const bowl = new Image();
    bowl.src = _img_menu_eng_bowl_png__WEBPACK_IMPORTED_MODULE_5__;
    const setMeal = new Image();
    setMeal.src = _img_menu_eng_set_meals_png__WEBPACK_IMPORTED_MODULE_6__;
    const morningMeal = new Image();
    morningMeal.src = _img_menu_eng_morning_meals_png__WEBPACK_IMPORTED_MODULE_7__;

    const sideDishes = new Image();
    sideDishes.src = _img_menu_eng_side_dishes_png__WEBPACK_IMPORTED_MODULE_8__;
    const toppings = new Image();
    toppings.src = _img_menu_eng_toppings_png__WEBPACK_IMPORTED_MODULE_9__;

    const drinks = new Image();
    drinks.src = _img_menu_eng_drinks_png__WEBPACK_IMPORTED_MODULE_10__;

    // APPEND DISHES TO FOODGRID!
    foodGridInner.appendChild(gyumeshi);
    foodGridInner.appendChild(curry);
    foodGridInner.appendChild(bowl);
    foodGridInner.appendChild(setMeal);
    foodGridInner.appendChild(morningMeal);
    foodGridInner.appendChild(sideDishes);
    foodGridInner.appendChild(toppings);
    foodGridInner.appendChild(drinks);
    foodGridOuter.appendChild(foodGridInner);
    menuRightHalf.appendChild(foodGridOuter);

    //add images to dish divs!

    // Let's compare two ways of doing this:

    //We have placed the 1st dish as a bg img on the CSS.
    //We can also just switch the createElement('div')'s for
    //createElement('img') and see what happens 


    // const gyumeshiPic = new Image();
    // gyumeshi.src = Gyumeshi;
    




    //class lists
    background.classList.add('background');

    // main.appendChild(background);
    content.appendChild(background);
    background.appendChild(mainHeader);
    mainHeader.appendChild(container);
    // container.append(containerSections);
    separatorDiv.appendChild(ramenIcon);
    separatorDiv.appendChild(menuLanguageText);
    background.appendChild(separatorDiv);
    background.appendChild(menuContainer);
  
    console.log('how many times does this run?');

    return content;
} 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxrRUFBa0UsNkJBQTZCLEdBQUcsV0FBVyxnREFBZ0QsOEJBQThCLDRCQUE0Qiw4QkFBOEIsMEJBQTBCLEdBQUcsVUFBVSxnQkFBZ0IsR0FBRyxZQUFZLG1CQUFtQix1QkFBdUIsMkNBQTJDLEtBQUssU0FBUyx1QkFBdUIsc0JBQXNCLEdBQUcsUUFBUSx1QkFBdUIsR0FBRyxpQkFBaUIsMENBQTBDLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDBDQUEwQyx5Q0FBeUMsS0FBSyxpQkFBaUIsb0JBQW9CLDRDQUE0QyxxQkFBcUIsMEJBQTBCLEdBQUcsbUJBQW1CLElBQUksc0JBQXNCLHFCQUFxQixrQkFBa0Isb0JBQW9CLDBCQUEwQixLQUFLLGlCQUFpQixxQkFBcUIsc0JBQXNCLEdBQUcseUJBQXlCLG9CQUFvQixtQ0FBbUMscUNBQXFDLDBCQUEwQixzQkFBc0IsSUFBSSw2QkFBNkIsMkJBQTJCLHNCQUFzQix3QkFBd0IseUJBQXlCLEdBQUcsb0JBQW9CLHFCQUFxQiw0Q0FBNEMsMEJBQTBCLEdBQUcsZ0JBQWdCLHNCQUFzQix3QkFBd0IscUJBQXFCLEdBQUcsNkJBQTZCLG9CQUFvQixvQ0FBb0Msc0JBQXNCLEdBQUcsaUJBQWlCLG1DQUFtQywwQkFBMEIsR0FBRyxrQkFBa0IsMEJBQTBCLHlCQUF5QixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxtQkFBbUIsNEJBQTRCLG1CQUFtQiwyQkFBMkIsd0JBQXdCLEdBQUcsdUJBQXVCLHNCQUFzQixxQkFBcUIsS0FBSyw0QkFBNEIsMEJBQTBCLEdBQUcsb2RBQW9kLDhCQUE4QixrQkFBa0IsNENBQTRDLG9CQUFvQix5Q0FBeUMsR0FBRyw0QkFBNEIscUJBQXFCLEdBQUcsbUJBQW1CLHFCQUFxQixvQkFBb0IscUNBQXFDLEdBQUcsaUJBQWlCLHFCQUFxQixzQkFBc0IsbUNBQW1DLG9CQUFvQixvQkFBb0IsbUNBQW1DLEdBQUcsZ0JBQWdCLHFCQUFxQixzQkFBc0Isb0JBQW9CLDZCQUE2Qiw0QkFBNEIseUJBQXlCLEdBQUcsc0JBQXNCLDBCQUEwQix1QkFBdUIsdUJBQXVCLHVCQUF1QixHQUFHLDRCQUE0QiwrQkFBK0IsMkJBQTJCLHNCQUFzQixHQUFHLHlCQUF5QixtQkFBbUIsbUNBQW1DLDJJQUEySSwyQkFBMkIsc0JBQXNCLHdCQUF3QixvQkFBb0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIsMENBQTBDLHlDQUF5Qyx3Q0FBd0MsR0FBRyxzQkFBc0IsbUNBQW1DLGtCQUFrQix1QkFBdUIsb0JBQW9CLEdBQUcsc0JBQXNCLDBDQUEwQyxvQkFBb0IsNEJBQTRCLG9DQUFvQyxtQkFBbUIsMkJBQTJCLHNCQUFzQix5QkFBeUIsS0FBSyw0QkFBNEIsa0JBQWtCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLGlCQUFpQixHQUFHLGtDQUFrQyxzQkFBc0IsR0FBRyxVQUFVLHNCQUFzQix1QkFBdUIsR0FBRywySEFBMkgsZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsZUFBZSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssbURBQW1ELDZCQUE2QixHQUFHLFdBQVcsZ0RBQWdELDhCQUE4Qiw0QkFBNEIsOEJBQThCLDBCQUEwQixHQUFHLFVBQVUsZ0JBQWdCLEdBQUcsWUFBWSxtQkFBbUIsdUJBQXVCLDJDQUEyQyxLQUFLLFNBQVMsdUJBQXVCLHNCQUFzQixHQUFHLFFBQVEsdUJBQXVCLEdBQUcsaUJBQWlCLDBDQUEwQyx1QkFBdUIsd0JBQXdCLG9CQUFvQiwwQ0FBMEMseUNBQXlDLEtBQUssaUJBQWlCLG9CQUFvQiw0Q0FBNEMscUJBQXFCLDBCQUEwQixHQUFHLG1CQUFtQixJQUFJLHNCQUFzQixxQkFBcUIsa0JBQWtCLG9CQUFvQiwwQkFBMEIsS0FBSyxpQkFBaUIscUJBQXFCLHNCQUFzQixHQUFHLHlCQUF5QixvQkFBb0IsbUNBQW1DLHFDQUFxQywwQkFBMEIsc0JBQXNCLElBQUksNkJBQTZCLDJCQUEyQixzQkFBc0Isd0JBQXdCLHlCQUF5QixHQUFHLG9CQUFvQixxQkFBcUIsNENBQTRDLDBCQUEwQixHQUFHLGdCQUFnQixzQkFBc0Isd0JBQXdCLHFCQUFxQixHQUFHLDZCQUE2QixvQkFBb0Isb0NBQW9DLHNCQUFzQixHQUFHLGlCQUFpQixtQ0FBbUMsMEJBQTBCLEdBQUcsa0JBQWtCLDBCQUEwQix5QkFBeUIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsbUJBQW1CLDRCQUE0QixtQkFBbUIsMkJBQTJCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IscUJBQXFCLEtBQUssNEJBQTRCLDBCQUEwQixHQUFHLG9kQUFvZCw4QkFBOEIsa0JBQWtCLDRDQUE0QyxvQkFBb0IseUNBQXlDLEdBQUcsNEJBQTRCLHFCQUFxQixHQUFHLG1CQUFtQixxQkFBcUIsb0JBQW9CLHFDQUFxQyxHQUFHLGlCQUFpQixxQkFBcUIsc0JBQXNCLG1DQUFtQyxvQkFBb0Isb0JBQW9CLG1DQUFtQyxHQUFHLGdCQUFnQixxQkFBcUIsc0JBQXNCLG9CQUFvQiw2QkFBNkIsNEJBQTRCLHlCQUF5QixHQUFHLHNCQUFzQiwwQkFBMEIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsR0FBRyw0QkFBNEIsK0JBQStCLDJCQUEyQixzQkFBc0IsR0FBRyx5QkFBeUIsbUJBQW1CLG1DQUFtQywySUFBMkksMkJBQTJCLHNCQUFzQix3QkFBd0Isb0JBQW9CLDBCQUEwQix3QkFBd0IsMEJBQTBCLDBDQUEwQyx5Q0FBeUMsd0NBQXdDLEdBQUcsc0JBQXNCLG1DQUFtQyxrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLHNCQUFzQiwwQ0FBMEMsb0JBQW9CLDRCQUE0QixvQ0FBb0MsbUJBQW1CLDJCQUEyQixzQkFBc0IseUJBQXlCLEtBQUssNEJBQTRCLGtCQUFrQix1QkFBdUIsMEJBQTBCLHVCQUF1QixpQkFBaUIsR0FBRyxrQ0FBa0Msc0JBQXNCLEdBQUcsVUFBVSxzQkFBc0IsdUJBQXVCLEdBQUcsdUlBQXVJO0FBQ3AvVjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2dCO0FBQ0M7QUFDYTtBQUNOO0FBQ0Y7QUFDUztBQUNRO0FBQ0o7QUFDTDtBQUNKOztBQUVBO0FBQ0M7Ozs7QUFJaEQ7QUFDQTtBQUNBOztBQUVlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFJO0FBQzFCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQU87O0FBRTdCO0FBQ0EscUJBQXFCLHNEQUFPO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsdURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFLOztBQUVyQjs7O0FBR0E7QUFDQSxlQUFlLG1EQUFJO0FBQ25CO0FBQ0Esa0JBQWtCLHdEQUFRO0FBQzFCO0FBQ0Esc0JBQXNCLDREQUFZOztBQUVsQztBQUNBLHFCQUFxQiwwREFBVTtBQUMvQjtBQUNBLG1CQUFtQix1REFBUTs7QUFFM0I7QUFDQSxpQkFBaUIsc0RBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG5cXG59XFxuXFxuLm1haW4tbmF2IGE6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEkgS05PVyBIT1cgV0UgQ0FOIE1BS0UgSVQgTElORSBVUCEhIVxcbiAgICBKVVNUIE1BS0UgLk1FTlUtQ09OVEFJTkVSIEJFIDMgQ09MVU1OUyxcXG4gICAgVEhFTiBTUEFOIFRIRSBDT09MLUJFSUdFIEFDUk9TUyBUSE9TRSBDT0xVTU5TLFxcbiAgICBcXG4gICAgVEhFTiBDUkVBVEUgQU5PVEhFUiBHUklEIElOU0lERSBDT0xVTU4gMixcXG4gICAgQU5EIEdJVkUgSVQgVFdPIENPTFVNTlM6IDFGUiBBTkQgM0ZSLlxcblxcbiAgICBUSEVOIElOU0lERSBUSEUgU0VDT05EIENPTFVNTiwgVEhFIE9ORSBcXG4gICAgVEhBVCBUQUtFUyAzRlIsIFBVVCBUSEUgRElWIFdJVEggVEhFIEFMTU9TVC1XSElURSxcXG4gICAgQU5EIFRIRSBPVEhFUiBDT0xVTU4gU1RBWVMgVEhFIFNBTUUgQ09MT1VSIEFTIE9VVFNJREUgVEhJU1xcbiAgICBTRUNPTkQgR1JJRCwgV0hJQ0ggSVMgQ09PTC1CRUlHRVxcbiovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbG1vc3QtYmVpZ2UpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1jZW50ZXItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5tZW51LWdyaWQtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubWVudS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDlweCAxZnI7XFxufVxcblxcbi5tZW51LWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjdweDtcXG59XFxuXFxuLm1lbnUtbGVmdCA+IGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG1heC13aWR0aDogMTg5cHg7XFxuICAgIG1heC1oZWlnaHQ6IDc3cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxuICAgIGZpbHRlcjogb3BhY2l0eSg3MCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uZm9vZC1ncmlkLW91dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWcge1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogV0UnUkUgVEVTVElORyBIT1cgV0UnUkUgR09JTkcgVE8gQVBQTFkgVEhFIElNQUdFU1xcblRPIFRIRSBESVNIIERJVlMuIEdZVU1FU0hJIFdJVEggQ1NTLCBUSEUgUkVTVCBXSVRIIEpTICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0dBQ0c7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOzs7QUFHSDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixvSUFBb0k7SUFDcEksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO3VEQUN1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG5cXG59XFxuXFxuLm1haW4tbmF2IGE6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEkgS05PVyBIT1cgV0UgQ0FOIE1BS0UgSVQgTElORSBVUCEhIVxcbiAgICBKVVNUIE1BS0UgLk1FTlUtQ09OVEFJTkVSIEJFIDMgQ09MVU1OUyxcXG4gICAgVEhFTiBTUEFOIFRIRSBDT09MLUJFSUdFIEFDUk9TUyBUSE9TRSBDT0xVTU5TLFxcbiAgICBcXG4gICAgVEhFTiBDUkVBVEUgQU5PVEhFUiBHUklEIElOU0lERSBDT0xVTU4gMixcXG4gICAgQU5EIEdJVkUgSVQgVFdPIENPTFVNTlM6IDFGUiBBTkQgM0ZSLlxcblxcbiAgICBUSEVOIElOU0lERSBUSEUgU0VDT05EIENPTFVNTiwgVEhFIE9ORSBcXG4gICAgVEhBVCBUQUtFUyAzRlIsIFBVVCBUSEUgRElWIFdJVEggVEhFIEFMTU9TVC1XSElURSxcXG4gICAgQU5EIFRIRSBPVEhFUiBDT0xVTU4gU1RBWVMgVEhFIFNBTUUgQ09MT1VSIEFTIE9VVFNJREUgVEhJU1xcbiAgICBTRUNPTkQgR1JJRCwgV0hJQ0ggSVMgQ09PTC1CRUlHRVxcbiovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbG1vc3QtYmVpZ2UpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1jZW50ZXItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5tZW51LWdyaWQtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubWVudS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDlweCAxZnI7XFxufVxcblxcbi5tZW51LWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjdweDtcXG59XFxuXFxuLm1lbnUtbGVmdCA+IGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG1heC13aWR0aDogMTg5cHg7XFxuICAgIG1heC1oZWlnaHQ6IDc3cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxuICAgIGZpbHRlcjogb3BhY2l0eSg3MCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uZm9vZC1ncmlkLW91dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWcge1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogV0UnUkUgVEVTVElORyBIT1cgV0UnUkUgR09JTkcgVE8gQVBQTFkgVEhFIElNQUdFU1xcblRPIFRIRSBESVNIIERJVlMuIEdZVU1FU0hJIFdJVEggQ1NTLCBUSEUgUkVTVCBXSVRIIEpTICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFJhbWVuIGZyb20gJy4vcmFtZW4taWNvbi5wbmcnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9tYXRzdXlhLWxvZ28uZ2lmJztcbmltcG9ydCBHeXVtZXNoaSBmcm9tICcuL2ltZy9tZW51LWVuZy9neXVtZXNoaS5qcGcnO1xuaW1wb3J0IEN1cnJ5IGZyb20gJy4vaW1nL21lbnUtZW5nL2N1cnJ5LnBuZyc7XG5pbXBvcnQgQm93bCBmcm9tICcuL2ltZy9tZW51LWVuZy9ib3dsLnBuZyc7XG5pbXBvcnQgU2V0TWVhbHMgZnJvbSAnLi9pbWcvbWVudS1lbmcvc2V0LW1lYWxzLnBuZyc7XG5pbXBvcnQgTW9ybmluZ01lYWxzIGZyb20gJy4vaW1nL21lbnUtZW5nL21vcm5pbmctbWVhbHMucG5nJztcbmltcG9ydCBTaWRlRGlzaGVzIGZyb20gJy4vaW1nL21lbnUtZW5nL3NpZGUtZGlzaGVzLnBuZyc7XG5pbXBvcnQgVG9wcGluZ3MgZnJvbSAnLi9pbWcvbWVudS1lbmcvdG9wcGluZ3MucG5nJztcbmltcG9ydCBEcmlua3MgZnJvbSAnLi9pbWcvbWVudS1lbmcvZHJpbmtzLnBuZyc7XG5cbmltcG9ydCBFbmdNZW51IGZyb20gJy4vaW1nL21lbnUtc2VsZWN0L2VuLmpwZyc7XG5pbXBvcnQgS29yTWVudSBmcm9tICcuL2ltZy9tZW51LXNlbGVjdC9rb3IuanBnJztcblxuXG5cbi8vIFdFIE1BWSBWRVJZIFdFTEwgV0lTSCBUTyBTRVBBUkFURSBUSElTIElOVE8gXG4vLyBTRVZFUkFMIFNNQUxMRVIgRlVOQ1RJT05TLCBFQUNIIEFQUEVORElORyBTT01FVEhJTkdcbi8vIFRPIE9VUiBCQUNLR1JPVU5ELiBUSEVOLCBSVU4gQUxMIFRIRSBGVU5DVElPTlMgSU4gSU5ERVguSlNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcblxuICAgIC8vIGFsZXJ0KCdURVNUJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9OYXZpZ2F0aW9uIGJhciwgb3IgY29udGFpbmVyXG4gICAgLy8gY29uc3QgaGVhZGVyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaGVhZGVyQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYmFyJyk7XG5cbiAgICAvL3RoZSBtYXRzdXlhIGxvZ29cbiAgICBjb25zdCBtYXRzdXlhTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIG1hdHN1eWFMb2dvLnNyYyA9IExvZ287IFxuICAgIG1hdHN1eWFMb2dvLmNsYXNzTGlzdC5hZGQoJ3NtYWxsLWljb24nKVxuXG5cbiAgICAvL21haW4gaGVhZGVyXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXInKTtcblxuICAgIC8vY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXRzdXlhTG9nbyk7XG5cbiAgICAvL25hdmlnYXRpb24gYmFyXG4gICAgY29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYnKTtcbiAgICBcbiAgICBjb25zdCB1bE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWxOYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtbGlzdCcpO1xuICAgIFxuICAgIGNvbnN0IGxpTmF2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIFxuICAgIG1lbnVOYXYuaWQgPSAnbWVudS1hbmNob3InO1xuICAgIG1lbnVOYXYuaW5uZXJIVE1MID0gJ01lbnUnO1xuXG4gICAgbGlOYXZPbmUuYXBwZW5kQ2hpbGQobWVudU5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZPbmUpO1xuICAgIFxuICAgIGNvbnN0IGxpTmF2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBzaG9wTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgc2hvcE5hdi5pZCA9ICdzdG9yZS1sb2NhdG9yLWFuY2hvcic7XG4gICAgc2hvcE5hdi5pbm5lckhUTUwgPSAnU3RvcmUgbG9jYXRvcic7XG5cbiAgICBsaU5hdlR3by5hcHBlbmRDaGlsZChzaG9wTmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdlR3byk7XG5cbiAgICBcbiAgICBjb25zdCBsaU5hdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb21wYW55TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbXBhbnlOYXYuaW5uZXJIVE1MID0gJ091ciBjb21wYW55JztcbiAgICBsaU5hdlRocmVlLmFwcGVuZENoaWxkKGNvbXBhbnlOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2VGhyZWUpO1xuICAgIFxuICAgIGNvbnN0IGxpTmF2Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaW52ZXN0b3JOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW52ZXN0b3JOYXYuaW5uZXJIVE1MID0gJ0ludmVzdG9yIGluZm9ybWF0aW9uJztcbiAgICBsaU5hdkZvdXIuYXBwZW5kQ2hpbGQoaW52ZXN0b3JOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2Rm91cik7XG5cbiAgICAvLyBjb25zdCBsaU5hdkZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIC8vIGNvbnN0IGZ1dHVyZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAvLyBmdXR1cmVOYXYuaW5uZXJIVE1MID0gJ0Z1dHVyZSBkZXZlbG9wbWVudCc7XG4gICAgLy8gbGlOYXZGaXZlLmFwcGVuZENoaWxkKGZ1dHVyZU5hdik7XG4gICAgLy8gdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZGaXZlKTtcbiAgICBcbiAgICBtYWluTmF2LmFwcGVuZENoaWxkKHVsTmF2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk5hdik7XG5cbiAgICAvLyBjb25zdCBjb250YWluZXJTZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnRhaW5lclNlY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1zZWN0aW9ucycpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29udGFpbmVyTWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgLy8gY29udGFpbmVyU2VjdGlvbnMuYXBwZW5kQ2hpbGQoY29udGFpbmVyTWVudSk7XG4gICAgLy8gY29uc3QgY29udGFpbmVyU3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29udGFpbmVyU3RvcmUuaW5uZXJIVE1MID0gJ1N0b3JlIExvY2F0b3InO1xuICAgIC8vIGNvbnRhaW5lclNlY3Rpb25zLmFwcGVuZENoaWxkKGNvbnRhaW5lclN0b3JlKTtcbiAgIFxuICAgXG4gICAgLy8gY29uc3QgY29udGFpbmVyQ29tcGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBjb25zdCBjb250YWluZXJJbnZlc3RvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29uc3QgY29udGFpbmVyRnV0dXJlRGV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgLy9FbmdsaXNoIG1lbnUgc2VwYXJhdG9yXG4gICAgY29uc3Qgc2VwYXJhdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VwYXJhdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ3NlcGFyYXRvci1kaXYnKTtcbiAgICBjb25zdCByYW1lbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICByYW1lbkljb24uc3JjID0gUmFtZW47XG4gICAgcmFtZW5JY29uLmNsYXNzTGlzdC5hZGQoJ3NtYWxsLWljb24nKTtcbiAgICBjb25zdCBtZW51TGFuZ3VhZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVMYW5ndWFnZVRleHQuaW5uZXJIVE1MID0gJ0VuZ2xpc2ggTWVudSc7XG4gICAgbWVudUxhbmd1YWdlVGV4dC5jbGFzc0xpc3QuYWRkKCdtZW51LWxhbmd1YWdlLXRleHQnKTtcblxuICAgIC8vIC8vTWVudSBkaXZzXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBjb25zdCBtZW51TGFuZ3VhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDZW50ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jZW50ZXItY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVDdXJyZW50TGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVHcmlkSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JpZC1iZycpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gICAgY29uc3QgbWVudVJpZ2h0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVSaWdodEhhbGYuY2xhc3NMaXN0LmFkZCgnbWVudS1yaWdodCcpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVJpZ2h0SGFsZik7XG5cbiAgICBjb25zdCBtZW51TGVmdHRIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxlZnR0SGFsZi5jbGFzc0xpc3QuYWRkKCdtZW51LWxlZnQnKTtcbiAgICBjb25zdCBlbmdsaXNoTWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIGVuZ2xpc2hNZW51LnNyYyA9IEVuZ01lbnU7XG5cbiAgICBjb25zdCBrb3JlYW5NZW51ID0gbmV3IEltYWdlKCk7XG4gICAga29yZWFuTWVudS5zcmMgPSBLb3JNZW51O1xuICAgIFxuICAgIGNvbnN0IHNwYW5pc2hNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51TGVmdHRIYWxmLmFwcGVuZENoaWxkKGVuZ2xpc2hNZW51KTtcbiAgICBtZW51TGVmdHRIYWxmLmFwcGVuZENoaWxkKGtvcmVhbk1lbnUpO1xuICAgIG1lbnVMZWZ0dEhhbGYuYXBwZW5kQ2hpbGQoc3BhbmlzaE1lbnUpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUxlZnR0SGFsZik7XG5cbiAgICAvL1NlbGVjdGVkIG1lbnUgbGFuZ3VhZ2UgXG4gICAgY29uc3Qgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3RlZE1lbnVMYW5ndWFnZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1tZW51LWxhbmcnKTtcbiAgICBzZWxlY3RlZE1lbnVMYW5ndWFnZS5pbm5lckhUTUwgPSAnRW5nbGlzaCBNZW51JztcbiAgICBtZW51UmlnaHRIYWxmLmFwcGVuZENoaWxkKHNlbGVjdGVkTWVudUxhbmd1YWdlKTsgIFxuICAgIFxuICAgIC8vRk9PRCBHUklEISBcbiAgICBjb25zdCBmb29kR3JpZElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZEdyaWRJbm5lci5jbGFzc0xpc3QuYWRkKCdmb29kLWdyaWQtaW5uZXInKTtcblxuICAgIGNvbnN0IGZvb2RHcmlkT3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kR3JpZE91dGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JpZC1vdXRlcicpO1xuXG4gICAgY29uc3QgZ3l1bWVzaGkgPSBuZXcgSW1hZ2UoKTtcbiAgICBneXVtZXNoaS5zcmMgPSBHeXVtZXNoaTtcbiAgICBcbiAgICAvL1RSWUlORyBPVVQgU0VDT05EIElNRyBNRVRIT0RcbiAgICBjb25zdCBjdXJyeSA9IG5ldyBJbWFnZSgpO1xuICAgIGN1cnJ5LnNyYyA9IEN1cnJ5O1xuXG4gICAgLy9USElTIFNFQ09ORCBXQVkgTE9PS1MgQSBMT1QgQkVUVEVSIVxuXG5cbiAgICBjb25zdCBib3dsID0gbmV3IEltYWdlKCk7XG4gICAgYm93bC5zcmMgPSBCb3dsO1xuICAgIGNvbnN0IHNldE1lYWwgPSBuZXcgSW1hZ2UoKTtcbiAgICBzZXRNZWFsLnNyYyA9IFNldE1lYWxzO1xuICAgIGNvbnN0IG1vcm5pbmdNZWFsID0gbmV3IEltYWdlKCk7XG4gICAgbW9ybmluZ01lYWwuc3JjID0gTW9ybmluZ01lYWxzO1xuXG4gICAgY29uc3Qgc2lkZURpc2hlcyA9IG5ldyBJbWFnZSgpO1xuICAgIHNpZGVEaXNoZXMuc3JjID0gU2lkZURpc2hlcztcbiAgICBjb25zdCB0b3BwaW5ncyA9IG5ldyBJbWFnZSgpO1xuICAgIHRvcHBpbmdzLnNyYyA9IFRvcHBpbmdzO1xuXG4gICAgY29uc3QgZHJpbmtzID0gbmV3IEltYWdlKCk7XG4gICAgZHJpbmtzLnNyYyA9IERyaW5rcztcblxuICAgIC8vIEFQUEVORCBESVNIRVMgVE8gRk9PREdSSUQhXG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChneXVtZXNoaSk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChjdXJyeSk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChib3dsKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKHNldE1lYWwpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQobW9ybmluZ01lYWwpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoc2lkZURpc2hlcyk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZCh0b3BwaW5ncyk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChkcmlua3MpO1xuICAgIGZvb2RHcmlkT3V0ZXIuYXBwZW5kQ2hpbGQoZm9vZEdyaWRJbm5lcik7XG4gICAgbWVudVJpZ2h0SGFsZi5hcHBlbmRDaGlsZChmb29kR3JpZE91dGVyKTtcblxuICAgIC8vYWRkIGltYWdlcyB0byBkaXNoIGRpdnMhXG5cbiAgICAvLyBMZXQncyBjb21wYXJlIHR3byB3YXlzIG9mIGRvaW5nIHRoaXM6XG5cbiAgICAvL1dlIGhhdmUgcGxhY2VkIHRoZSAxc3QgZGlzaCBhcyBhIGJnIGltZyBvbiB0aGUgQ1NTLlxuICAgIC8vV2UgY2FuIGFsc28ganVzdCBzd2l0Y2ggdGhlIGNyZWF0ZUVsZW1lbnQoJ2RpdicpJ3MgZm9yXG4gICAgLy9jcmVhdGVFbGVtZW50KCdpbWcnKSBhbmQgc2VlIHdoYXQgaGFwcGVucyBcblxuXG4gICAgLy8gY29uc3QgZ3l1bWVzaGlQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBneXVtZXNoaS5zcmMgPSBHeXVtZXNoaTtcbiAgICBcblxuXG5cblxuICAgIC8vY2xhc3MgbGlzdHNcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcblxuICAgIC8vIG1haW4uYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAvLyBjb250YWluZXIuYXBwZW5kKGNvbnRhaW5lclNlY3Rpb25zKTtcbiAgICBzZXBhcmF0b3JEaXYuYXBwZW5kQ2hpbGQocmFtZW5JY29uKTtcbiAgICBzZXBhcmF0b3JEaXYuYXBwZW5kQ2hpbGQobWVudUxhbmd1YWdlVGV4dCk7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChzZXBhcmF0b3JEaXYpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIFxuICAgIGNvbnNvbGUubG9nKCdob3cgbWFueSB0aW1lcyBkb2VzIHRoaXMgcnVuPycpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==