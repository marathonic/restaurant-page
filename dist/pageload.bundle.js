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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nhtml {\n    min-width: fit-content;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n \n}\n\n#footy {\n    width: 300px;\n    height: auto;\n    background-color: var(--cool-beige);\n    bottom: 0;\n}\n\n\n/* .header-bg {\n} */\n\n.separator-div {\n    background-color: var(--cool-beige);\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.separator-div > img {\n    max-width: 20%;\n    max-height: 20%;\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 27px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-beige);\n    display: flex;\n    justify-content: space-around;\n    border-radius: 0;\n}\n\n.main-header > div {\n    margin: 20px;\n}\n\n\n.container {\n    grid-column: 2;\n    min-width: 60vw;\n    padding-top: 50px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--cool-mustard);\n    border-radius: 23px;\n}\n\n.main-header .container {\n    display: flex;\n    /* align-items: center; */\n    flex-wrap: wrap;\n}\n\n.main-header img {\n    max-height: 90%;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n.main-nav a {\n    padding: 5px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 6fr 5fr;\n    max-height: 100vh;\n}\n\n#menu-container-foot {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    background-color: var(--cool-beige);\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.menu-grid-bg {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.menu-right {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: whitesmoke;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n.menu-left {\n    grid-column: 1;\n    grid-row: 1 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 27px;\n}\n\n.menu-left > img {\n    border-radius: 12px;\n    max-width: 189px;\n    max-height: 77px;\n    margin-top: 20px;\n}\n\n.menu-left > img:hover {\n    filter: brightness(110%);\n    filter: opacity(70%);\n    cursor: pointer;\n}\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n    border-bottom: solid whitesmoke 3px;\n    border-right: solid whitesmoke 3px;\n    box-shadow: 1px 4px 4px gainsboro;\n}\n\n.food-grid-outer {\n    background-color: whitesmoke;\n    grid-row: 2;\n    margin-top: 15px;\n    padding: 20px;\n}\n\n.food-grid-inner {\n    background-color: var(--cool-beige);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: 3px;\n    padding-bottom: 10px;\n    flex-wrap: wrap;\n    border-radius: 4px;\n\n}\n\n.food-grid-inner > img {\n    margin: 2px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 3px;\n    z-index: 3;\n}\n\n.food-grid-inner > img:hover {\n    cursor: pointer;\n}\n\n.svg {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n/* WE'RE TESTING HOW WE'RE GOING TO APPLY THE IMAGES\nTO THE DISH DIVS. GYUMESHI WITH CSS, THE REST WITH JS */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;IACnC,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,mCAAmC;IACnC,kCAAkC;;AAEtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,SAAS;AACb;;;AAGA;GACG;;AAEH;IACI,mCAAmC;IACnC,cAAc;IACd,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;;;GAMG;;;AAGH;IACI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,mCAAmC;IACnC,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;;AAGA;;;;;;;;;;;CAWC;;AAED;IACI,uBAAuB;IACvB,WAAW;IACX,qCAAqC;IACrC,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,mCAAmC;AACvC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,4BAA4B;IAC5B,oIAAoI;IACpI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,mCAAmC;IACnC,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;uDACuD","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nhtml {\n    min-width: fit-content;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n \n}\n\n#footy {\n    width: 300px;\n    height: auto;\n    background-color: var(--cool-beige);\n    bottom: 0;\n}\n\n\n/* .header-bg {\n} */\n\n.separator-div {\n    background-color: var(--cool-beige);\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.separator-div > img {\n    max-width: 20%;\n    max-height: 20%;\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 27px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-beige);\n    display: flex;\n    justify-content: space-around;\n    border-radius: 0;\n}\n\n.main-header > div {\n    margin: 20px;\n}\n\n\n.container {\n    grid-column: 2;\n    min-width: 60vw;\n    padding-top: 50px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--cool-mustard);\n    border-radius: 23px;\n}\n\n.main-header .container {\n    display: flex;\n    /* align-items: center; */\n    flex-wrap: wrap;\n}\n\n.main-header img {\n    max-height: 90%;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n.main-nav a {\n    padding: 5px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    grid-template-rows: 6fr 5fr;\n    max-height: 100vh;\n}\n\n#menu-container-foot {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    background-color: var(--cool-beige);\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.menu-grid-bg {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.menu-right {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: whitesmoke;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n.menu-left {\n    grid-column: 1;\n    grid-row: 1 / 3;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-right: 27px;\n}\n\n.menu-left > img {\n    border-radius: 12px;\n    max-width: 189px;\n    max-height: 77px;\n    margin-top: 20px;\n}\n\n.menu-left > img:hover {\n    filter: brightness(110%);\n    filter: opacity(70%);\n    cursor: pointer;\n}\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n    border-bottom: solid whitesmoke 3px;\n    border-right: solid whitesmoke 3px;\n    box-shadow: 1px 4px 4px gainsboro;\n}\n\n.food-grid-outer {\n    background-color: whitesmoke;\n    grid-row: 2;\n    margin-top: 15px;\n    padding: 20px;\n}\n\n.food-grid-inner {\n    background-color: var(--cool-beige);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: 3px;\n    padding-bottom: 10px;\n    flex-wrap: wrap;\n    border-radius: 4px;\n\n}\n\n.food-grid-inner > img {\n    margin: 2px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 3px;\n    z-index: 3;\n}\n\n.food-grid-inner > img:hover {\n    cursor: pointer;\n}\n\n.svg {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n/* WE'RE TESTING HOW WE'RE GOING TO APPLY THE IMAGES\nTO THE DISH DIVS. GYUMESHI WITH CSS, THE REST WITH JS */\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ramen_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramen-icon.png */ "./src/ramen-icon.png");
/* harmony import */ var _img_menu_eng_gyumeshi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu-eng/gyumeshi.jpg */ "./src/img/menu-eng/gyumeshi.jpg");
/* harmony import */ var _img_menu_eng_curry_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu-eng/curry.png */ "./src/img/menu-eng/curry.png");
/* harmony import */ var _img_menu_eng_bowl_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu-eng/bowl.png */ "./src/img/menu-eng/bowl.png");
/* harmony import */ var _img_menu_eng_set_meals_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu-eng/set-meals.png */ "./src/img/menu-eng/set-meals.png");
/* harmony import */ var _img_menu_eng_morning_meals_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu-eng/morning-meals.png */ "./src/img/menu-eng/morning-meals.png");
/* harmony import */ var _img_menu_eng_side_dishes_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu-eng/side-dishes.png */ "./src/img/menu-eng/side-dishes.png");
/* harmony import */ var _img_menu_eng_toppings_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu-eng/toppings.png */ "./src/img/menu-eng/toppings.png");
/* harmony import */ var _img_menu_eng_drinks_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/menu-eng/drinks.png */ "./src/img/menu-eng/drinks.png");
/* harmony import */ var _img_menu_select_en_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/menu-select/en.jpg */ "./src/img/menu-select/en.jpg");
/* harmony import */ var _img_menu_select_kor_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/menu-select/kor.jpg */ "./src/img/menu-select/kor.jpg");














//pageLoad contains our menu! We'll rename it menu() later;


function pageLoad() {
    // alert('TEST');
    const content = document.createElement('div');
    document.body.appendChild(content);


    const bgLayout = document.querySelector('#bg-layout');
    const background = document.createElement('div');


    //English menu separator
    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator-div');
    const ramenIcon = new Image();
    ramenIcon.src = _ramen_icon_png__WEBPACK_IMPORTED_MODULE_1__;
    ramenIcon.classList.add('small-icon');
    const menuLanguageText = document.createElement('p');
    menuLanguageText.innerHTML = 'Menu';
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
    englishMenu.src = _img_menu_select_en_jpg__WEBPACK_IMPORTED_MODULE_10__;

    const koreanMenu = new Image();
    koreanMenu.src = _img_menu_select_kor_jpg__WEBPACK_IMPORTED_MODULE_11__;
    
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
    gyumeshi.src = _img_menu_eng_gyumeshi_jpg__WEBPACK_IMPORTED_MODULE_2__;
    
    //TRYING OUT SECOND IMG METHOD
    const curry = new Image();
    curry.src = _img_menu_eng_curry_png__WEBPACK_IMPORTED_MODULE_3__;

    //THIS SECOND WAY LOOKS A LOT BETTER!


    const bowl = new Image();
    bowl.src = _img_menu_eng_bowl_png__WEBPACK_IMPORTED_MODULE_4__;
    const setMeal = new Image();
    setMeal.src = _img_menu_eng_set_meals_png__WEBPACK_IMPORTED_MODULE_5__;
    const morningMeal = new Image();
    morningMeal.src = _img_menu_eng_morning_meals_png__WEBPACK_IMPORTED_MODULE_6__;

    const sideDishes = new Image();
    sideDishes.src = _img_menu_eng_side_dishes_png__WEBPACK_IMPORTED_MODULE_7__;
    const toppings = new Image();
    toppings.src = _img_menu_eng_toppings_png__WEBPACK_IMPORTED_MODULE_8__;

    const drinks = new Image();
    drinks.src = _img_menu_eng_drinks_png__WEBPACK_IMPORTED_MODULE_9__;

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


    //class lists
    background.classList.add('background-invisible');
    background.id = 'background-grid'


    // main.appendChild(background);
    content.appendChild(background);
    // container.append(containerSections);
    separatorDiv.appendChild(ramenIcon);
    separatorDiv.appendChild(menuLanguageText);
    background.appendChild(separatorDiv);

    
    content.appendChild(menuContainer);

    const footy = document.createElement('footer');
    footy.id = 'footy';
    background.appendChild(footy);

    const menuContainerFoot = document.createElement('div');
    menuContainerFoot.id = 'menu-container-foot';
    menuContainer.appendChild(menuContainerFoot)

    // bgLayout.appendChild(content);  

    //footer

    return bgLayout;
} 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsdURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFLOztBQUVyQjs7O0FBR0E7QUFDQSxlQUFlLG1EQUFJO0FBQ25CO0FBQ0Esa0JBQWtCLHdEQUFRO0FBQzFCO0FBQ0Esc0JBQXNCLDREQUFZOztBQUVsQztBQUNBLHFCQUFxQiwwREFBVTtBQUMvQjtBQUNBLG1CQUFtQix1REFBUTs7QUFFM0I7QUFDQSxpQkFBaUIscURBQU07O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29vbC1tdXN0YXJkOiAjZWJlOThjO1xcbiAgICAtLWNvb2wtYmVpZ2U6ICNlNmUwYzg7XFxuICAgIC0tYWxtb3N0LWJlaWdlOiAjZjVmMGRiO1xcbiAgICAtLXNvZnQtcmVkOiAjZmZhZmNhO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vcnl1emFraS5qcGcnKTsgKi9cXG59XFxuXFxuaW1nIHtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgbWluLXdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gXFxufVxcblxcbiNmb290eSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG5cXG4vKiAuaGVhZGVyLWJnIHtcXG59ICovXFxuXFxuLnNlcGFyYXRvci1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNlcGFyYXRvci1kaXYgPiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDIwJTtcXG4gICAgbWF4LWhlaWdodDogMjAlO1xcbn1cXG5cXG4uc21hbGwtaWNvbiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XFxufVxcblxcbi8qIC5oZWFkZXItc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59ICovXFxuXFxuXFxuLm1lbnUtbGFuZ3VhZ2UtdGV4dCB7XFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5tYWluLWhlYWRlciA+IGRpdiB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBtaW4td2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLW11c3RhcmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG59XFxuXFxuXFxuLm1haW4tbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLm1haW4tbmF2IHVsIHtcXG4gICAgbWFyZ2luOiAxZW0gMCAwLjVlbTtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuXFxuLyogSSBLTk9XIEhPVyBXRSBDQU4gTUFLRSBJVCBMSU5FIFVQISEhXFxuICAgIEpVU1QgTUFLRSAuTUVOVS1DT05UQUlORVIgQkUgMyBDT0xVTU5TLFxcbiAgICBUSEVOIFNQQU4gVEhFIENPT0wtQkVJR0UgQUNST1NTIFRIT1NFIENPTFVNTlMsXFxuICAgIFxcbiAgICBUSEVOIENSRUFURSBBTk9USEVSIEdSSUQgSU5TSURFIENPTFVNTiAyLFxcbiAgICBBTkQgR0lWRSBJVCBUV08gQ09MVU1OUzogMUZSIEFORCAzRlIuXFxuXFxuICAgIFRIRU4gSU5TSURFIFRIRSBTRUNPTkQgQ09MVU1OLCBUSEUgT05FIFxcbiAgICBUSEFUIFRBS0VTIDNGUiwgUFVUIFRIRSBESVYgV0lUSCBUSEUgQUxNT1NULVdISVRFLFxcbiAgICBBTkQgVEhFIE9USEVSIENPTFVNTiBTVEFZUyBUSEUgU0FNRSBDT0xPVVIgQVMgT1VUU0lERSBUSElTXFxuICAgIFNFQ09ORCBHUklELCBXSElDSCBJUyBDT09MLUJFSUdFXFxuKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbW9zdC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDVmcjtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lci1mb290IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG59XFxuXFxuLm1lbnUtY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4ubWVudS1ncmlkLWJnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLm1lbnUtcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ5cHggMWZyO1xcbn1cXG5cXG4ubWVudS1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXgtd2lkdGg6IDE4OXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3N3B4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1sZWZ0ID4gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoNzAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtbWVudS1sYW5nIHtcXG4gICAgaGVpZ2h0OiA0OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIHJnYigyNDIsIDI1NSwgMjA3KSAyMCUsIHJnYigyNTMsIDI0MiwgMjIxKSA1NCUsIHJnYmEoMjQ3LDIyNiwxODUsMSkgMTAwJSk7XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IGdhaW5zYm9ybztcXG59XFxuXFxuLmZvb2QtZ3JpZC1vdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyID4gaW1nIHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIFdFJ1JFIFRFU1RJTkcgSE9XIFdFJ1JFIEdPSU5HIFRPIEFQUExZIFRIRSBJTUFHRVNcXG5UTyBUSEUgRElTSCBESVZTLiBHWVVNRVNISSBXSVRIIENTUywgVEhFIFJFU1QgV0lUSCBKUyAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxTQUFTO0FBQ2I7OztBQUdBO0dBQ0c7O0FBRUg7SUFDSSxtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOzs7Ozs7R0FNRzs7O0FBR0g7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsb0lBQW9JO0lBQ3BJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTt1REFDdURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29vbC1tdXN0YXJkOiAjZWJlOThjO1xcbiAgICAtLWNvb2wtYmVpZ2U6ICNlNmUwYzg7XFxuICAgIC0tYWxtb3N0LWJlaWdlOiAjZjVmMGRiO1xcbiAgICAtLXNvZnQtcmVkOiAjZmZhZmNhO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vcnl1emFraS5qcGcnKTsgKi9cXG59XFxuXFxuaW1nIHtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgbWluLXdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gXFxufVxcblxcbiNmb290eSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG5cXG4vKiAuaGVhZGVyLWJnIHtcXG59ICovXFxuXFxuLnNlcGFyYXRvci1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNlcGFyYXRvci1kaXYgPiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDIwJTtcXG4gICAgbWF4LWhlaWdodDogMjAlO1xcbn1cXG5cXG4uc21hbGwtaWNvbiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XFxufVxcblxcbi8qIC5oZWFkZXItc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59ICovXFxuXFxuXFxuLm1lbnUtbGFuZ3VhZ2UtdGV4dCB7XFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5tYWluLWhlYWRlciA+IGRpdiB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBtaW4td2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLW11c3RhcmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1haW4taGVhZGVyIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG59XFxuXFxuXFxuLm1haW4tbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLm1haW4tbmF2IHVsIHtcXG4gICAgbWFyZ2luOiAxZW0gMCAwLjVlbTtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuXFxuLyogSSBLTk9XIEhPVyBXRSBDQU4gTUFLRSBJVCBMSU5FIFVQISEhXFxuICAgIEpVU1QgTUFLRSAuTUVOVS1DT05UQUlORVIgQkUgMyBDT0xVTU5TLFxcbiAgICBUSEVOIFNQQU4gVEhFIENPT0wtQkVJR0UgQUNST1NTIFRIT1NFIENPTFVNTlMsXFxuICAgIFxcbiAgICBUSEVOIENSRUFURSBBTk9USEVSIEdSSUQgSU5TSURFIENPTFVNTiAyLFxcbiAgICBBTkQgR0lWRSBJVCBUV08gQ09MVU1OUzogMUZSIEFORCAzRlIuXFxuXFxuICAgIFRIRU4gSU5TSURFIFRIRSBTRUNPTkQgQ09MVU1OLCBUSEUgT05FIFxcbiAgICBUSEFUIFRBS0VTIDNGUiwgUFVUIFRIRSBESVYgV0lUSCBUSEUgQUxNT1NULVdISVRFLFxcbiAgICBBTkQgVEhFIE9USEVSIENPTFVNTiBTVEFZUyBUSEUgU0FNRSBDT0xPVVIgQVMgT1VUU0lERSBUSElTXFxuICAgIFNFQ09ORCBHUklELCBXSElDSCBJUyBDT09MLUJFSUdFXFxuKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbW9zdC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDVmcjtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lci1mb290IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG59XFxuXFxuLm1lbnUtY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4ubWVudS1ncmlkLWJnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLm1lbnUtcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ5cHggMWZyO1xcbn1cXG5cXG4ubWVudS1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXgtd2lkdGg6IDE4OXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3N3B4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1sZWZ0ID4gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoNzAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtbWVudS1sYW5nIHtcXG4gICAgaGVpZ2h0OiA0OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIHJnYigyNDIsIDI1NSwgMjA3KSAyMCUsIHJnYigyNTMsIDI0MiwgMjIxKSA1NCUsIHJnYmEoMjQ3LDIyNiwxODUsMSkgMTAwJSk7XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IGdhaW5zYm9ybztcXG59XFxuXFxuLmZvb2QtZ3JpZC1vdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyID4gaW1nIHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIFdFJ1JFIFRFU1RJTkcgSE9XIFdFJ1JFIEdPSU5HIFRPIEFQUExZIFRIRSBJTUFHRVNcXG5UTyBUSEUgRElTSCBESVZTLiBHWVVNRVNISSBXSVRIIENTUywgVEhFIFJFU1QgV0lUSCBKUyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBSYW1lbiBmcm9tICcuL3JhbWVuLWljb24ucG5nJztcbmltcG9ydCBHeXVtZXNoaSBmcm9tICcuL2ltZy9tZW51LWVuZy9neXVtZXNoaS5qcGcnO1xuaW1wb3J0IEN1cnJ5IGZyb20gJy4vaW1nL21lbnUtZW5nL2N1cnJ5LnBuZyc7XG5pbXBvcnQgQm93bCBmcm9tICcuL2ltZy9tZW51LWVuZy9ib3dsLnBuZyc7XG5pbXBvcnQgU2V0TWVhbHMgZnJvbSAnLi9pbWcvbWVudS1lbmcvc2V0LW1lYWxzLnBuZyc7XG5pbXBvcnQgTW9ybmluZ01lYWxzIGZyb20gJy4vaW1nL21lbnUtZW5nL21vcm5pbmctbWVhbHMucG5nJztcbmltcG9ydCBTaWRlRGlzaGVzIGZyb20gJy4vaW1nL21lbnUtZW5nL3NpZGUtZGlzaGVzLnBuZyc7XG5pbXBvcnQgVG9wcGluZ3MgZnJvbSAnLi9pbWcvbWVudS1lbmcvdG9wcGluZ3MucG5nJztcbmltcG9ydCBEcmlua3MgZnJvbSAnLi9pbWcvbWVudS1lbmcvZHJpbmtzLnBuZyc7XG5cbmltcG9ydCBFbmdNZW51IGZyb20gJy4vaW1nL21lbnUtc2VsZWN0L2VuLmpwZyc7XG5pbXBvcnQgS29yTWVudSBmcm9tICcuL2ltZy9tZW51LXNlbGVjdC9rb3IuanBnJztcblxuLy9wYWdlTG9hZCBjb250YWlucyBvdXIgbWVudSEgV2UnbGwgcmVuYW1lIGl0IG1lbnUoKSBsYXRlcjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICAvLyBhbGVydCgnVEVTVCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cbiAgICBjb25zdCBiZ0xheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZy1sYXlvdXQnKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIC8vRW5nbGlzaCBtZW51IHNlcGFyYXRvclxuICAgIGNvbnN0IHNlcGFyYXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvckRpdi5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3ItZGl2Jyk7XG4gICAgY29uc3QgcmFtZW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgcmFtZW5JY29uLnNyYyA9IFJhbWVuO1xuICAgIHJhbWVuSWNvbi5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJyk7XG4gICAgY29uc3QgbWVudUxhbmd1YWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGFuZ3VhZ2UtdGV4dCcpO1xuXG4gICAgLy8gLy9NZW51IGRpdnNcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIGNvbnN0IG1lbnVMYW5ndWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q2VudGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNlbnRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNlbnRlci1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUN1cnJlbnRMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUdyaWRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1ncmlkLWJnJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgICBjb25zdCBtZW51UmlnaHRIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVJpZ2h0SGFsZi5jbGFzc0xpc3QuYWRkKCdtZW51LXJpZ2h0Jyk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51UmlnaHRIYWxmKTtcblxuICAgIGNvbnN0IG1lbnVMZWZ0dEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TGVmdHRIYWxmLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGVmdCcpO1xuICAgIGNvbnN0IGVuZ2xpc2hNZW51ID0gbmV3IEltYWdlKCk7XG4gICAgZW5nbGlzaE1lbnUuc3JjID0gRW5nTWVudTtcblxuICAgIGNvbnN0IGtvcmVhbk1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBrb3JlYW5NZW51LnNyYyA9IEtvck1lbnU7XG4gICAgXG4gICAgY29uc3Qgc3BhbmlzaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1lbnVMZWZ0dEhhbGYuYXBwZW5kQ2hpbGQoZW5nbGlzaE1lbnUpO1xuICAgIG1lbnVMZWZ0dEhhbGYuYXBwZW5kQ2hpbGQoa29yZWFuTWVudSk7XG4gICAgbWVudUxlZnR0SGFsZi5hcHBlbmRDaGlsZChzcGFuaXNoTWVudSk7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51TGVmdHRIYWxmKTtcblxuICAgIC8vU2VsZWN0ZWQgbWVudSBsYW5ndWFnZSBcbiAgICBjb25zdCBzZWxlY3RlZE1lbnVMYW5ndWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlbGVjdGVkTWVudUxhbmd1YWdlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW1lbnUtbGFuZycpO1xuICAgIHNlbGVjdGVkTWVudUxhbmd1YWdlLmlubmVySFRNTCA9ICdFbmdsaXNoIE1lbnUnO1xuICAgIG1lbnVSaWdodEhhbGYuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRNZW51TGFuZ3VhZ2UpOyAgXG4gICAgXG4gICAgLy9GT09EIEdSSUQhIFxuICAgIGNvbnN0IGZvb2RHcmlkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kR3JpZElubmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JpZC1pbm5lcicpO1xuXG4gICAgY29uc3QgZm9vZEdyaWRPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RHcmlkT3V0ZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkLW91dGVyJyk7XG5cbiAgICBjb25zdCBneXVtZXNoaSA9IG5ldyBJbWFnZSgpO1xuICAgIGd5dW1lc2hpLnNyYyA9IEd5dW1lc2hpO1xuICAgIFxuICAgIC8vVFJZSU5HIE9VVCBTRUNPTkQgSU1HIE1FVEhPRFxuICAgIGNvbnN0IGN1cnJ5ID0gbmV3IEltYWdlKCk7XG4gICAgY3Vycnkuc3JjID0gQ3Vycnk7XG5cbiAgICAvL1RISVMgU0VDT05EIFdBWSBMT09LUyBBIExPVCBCRVRURVIhXG5cblxuICAgIGNvbnN0IGJvd2wgPSBuZXcgSW1hZ2UoKTtcbiAgICBib3dsLnNyYyA9IEJvd2w7XG4gICAgY29uc3Qgc2V0TWVhbCA9IG5ldyBJbWFnZSgpO1xuICAgIHNldE1lYWwuc3JjID0gU2V0TWVhbHM7XG4gICAgY29uc3QgbW9ybmluZ01lYWwgPSBuZXcgSW1hZ2UoKTtcbiAgICBtb3JuaW5nTWVhbC5zcmMgPSBNb3JuaW5nTWVhbHM7XG5cbiAgICBjb25zdCBzaWRlRGlzaGVzID0gbmV3IEltYWdlKCk7XG4gICAgc2lkZURpc2hlcy5zcmMgPSBTaWRlRGlzaGVzO1xuICAgIGNvbnN0IHRvcHBpbmdzID0gbmV3IEltYWdlKCk7XG4gICAgdG9wcGluZ3Muc3JjID0gVG9wcGluZ3M7XG5cbiAgICBjb25zdCBkcmlua3MgPSBuZXcgSW1hZ2UoKTtcbiAgICBkcmlua3Muc3JjID0gRHJpbmtzO1xuXG4gICAgLy8gQVBQRU5EIERJU0hFUyBUTyBGT09ER1JJRCFcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKGd5dW1lc2hpKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKGN1cnJ5KTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKGJvd2wpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoc2V0TWVhbCk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChtb3JuaW5nTWVhbCk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChzaWRlRGlzaGVzKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKHRvcHBpbmdzKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKGRyaW5rcyk7XG4gICAgZm9vZEdyaWRPdXRlci5hcHBlbmRDaGlsZChmb29kR3JpZElubmVyKTtcbiAgICBtZW51UmlnaHRIYWxmLmFwcGVuZENoaWxkKGZvb2RHcmlkT3V0ZXIpO1xuXG5cbiAgICAvL2NsYXNzIGxpc3RzXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWludmlzaWJsZScpO1xuICAgIGJhY2tncm91bmQuaWQgPSAnYmFja2dyb3VuZC1ncmlkJ1xuXG5cbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgLy8gY29udGFpbmVyLmFwcGVuZChjb250YWluZXJTZWN0aW9ucyk7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKHJhbWVuSWNvbik7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKG1lbnVMYW5ndWFnZVRleHQpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yRGl2KTtcblxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb290eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3R5LmlkID0gJ2Zvb3R5JztcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGZvb3R5KTtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXJGb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lckZvb3QuaWQgPSAnbWVudS1jb250YWluZXItZm9vdCc7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyRm9vdClcblxuICAgIC8vIGJnTGF5b3V0LmFwcGVuZENoaWxkKGNvbnRlbnQpOyAgXG5cbiAgICAvL2Zvb3RlclxuXG4gICAgcmV0dXJuIGJnTGF5b3V0O1xufSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=