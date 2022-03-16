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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nbody {\n    margin: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n\n}\n\n.header-bar {\n    display: flex;\n    background-color: var(--cool-mustard);\n    grid-column: 2;\n    border-radius: 16px;\n}\n\n/* .header-bg {\n} */\n\n.separator-div {\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 37px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-mustard);\n    border-radius: 21px;\n}\n\n.container {\n    min-width: auto;\n    padding-top: 50px;\n    margin: 0 auto;\n}\n\n.main-header .container {\n    display: flex;\n    /* align-items: center; */\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n    text-align: center;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n.main-nav a {\n    display: inline-block;\n    padding: 10px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.menu-grid-bg {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.menu-right {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: whitesmoke;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n.menu-left {\n    grid-column: 1;\n    grid-row: 1 / 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.english-menu,\n.korean-menu,\n.spanish-menu {\n    width: 200px;\n    height: 129px;\n    background-color: var(--soft-red);\n}\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n}\n\n.food-grid {\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: repeat(4, 1fr);\n    border: solid black 1px;\n    margin-top: 15px;\n    gap: 20px;\n}\n\n.food-grid > div {\n    max-width: 130px;\n    border: solid blue 2px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;IACnC,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,mCAAmC;IACnC,kCAAkC;;AAEtC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,mBAAmB;AACvB;;AAEA;GACG;;AAEH;IACI,cAAc;IACd,WAAW;IACX,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;;;GAMG;;;AAGH;IACI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,6BAA6B;IAC7B,eAAe;AACnB;;;AAGA;IACI,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,aAAa;AACjB;;;AAGA;;;;;;;;;;;CAWC;;AAED;IACI,uBAAuB;IACvB,WAAW;IACX,qCAAqC;IACrC,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;;;IAGI,YAAY;IACZ,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,4BAA4B;IAC5B,oIAAoI;IACpI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,qCAAqC;IACrC,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nbody {\n    margin: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n\n}\n\n.header-bar {\n    display: flex;\n    background-color: var(--cool-mustard);\n    grid-column: 2;\n    border-radius: 16px;\n}\n\n/* .header-bg {\n} */\n\n.separator-div {\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 37px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-mustard);\n    border-radius: 21px;\n}\n\n.container {\n    min-width: auto;\n    padding-top: 50px;\n    margin: 0 auto;\n}\n\n.main-header .container {\n    display: flex;\n    /* align-items: center; */\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n    text-align: center;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n.main-nav a {\n    display: inline-block;\n    padding: 10px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.menu-grid-bg {\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.menu-right {\n    grid-column: 2;\n    grid-row: 1 / 3;\n    background-color: whitesmoke;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n.menu-left {\n    grid-column: 1;\n    grid-row: 1 / 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.english-menu,\n.korean-menu,\n.spanish-menu {\n    width: 200px;\n    height: 129px;\n    background-color: var(--soft-red);\n}\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n}\n\n.food-grid {\n    grid-row: 2;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: repeat(4, 1fr);\n    border: solid black 1px;\n    margin-top: 15px;\n    gap: 20px;\n}\n\n.food-grid > div {\n    max-width: 130px;\n    border: solid blue 2px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ramen_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramen-icon.png */ "./src/ramen-icon.png");
/* harmony import */ var _matsuya_logo_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matsuya-logo.gif */ "./src/matsuya-logo.gif");




function pageLoad() {
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
    menuNav.innerHTML = 'Menu';
    liNavOne.appendChild(menuNav);
    ulNav.appendChild(liNavOne);
    
    const liNavTwo = document.createElement('li');
    const storeNav = document.createElement('a');
    storeNav.innerHTML = 'Store locator';
    liNavTwo.appendChild(storeNav);
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

    const liNavFive = document.createElement('li');
    const futureNav = document.createElement('a');
    futureNav.innerHTML = 'Future development';
    liNavFive.appendChild(futureNav);
    ulNav.appendChild(liNavFive);
    
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
    const englishMenu = document.createElement('div');
    const koreanMenu = document.createElement('div');
    const spanishMenu = document.createElement('div');

    englishMenu.classList.add('english-menu');
    koreanMenu.classList.add('korean-menu');
    spanishMenu.classList.add('spanish-menu');
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
    const foodGrid = document.createElement('div');
    foodGrid.classList.add('food-grid');

    const gyumeshi = document.createElement('div');
    const curry = document.createElement('div');
    const bbq = document.createElement('div');
    const setMeal = document.createElement('div');
    const morningMeal = document.createElement('div');
    const sideDish = document.createElement('div');
    const toppings = document.createElement('div');
    const drinks = document.createElement('div');

    // APPEND DISHES TO FOODGRID!
    foodGrid.appendChild(gyumeshi);
    foodGrid.appendChild(curry);
    foodGrid.appendChild(bbq);
    foodGrid.appendChild(setMeal);
    foodGrid.appendChild(morningMeal);
    foodGrid.appendChild(sideDish);
    foodGrid.appendChild(toppings);
    foodGrid.appendChild(drinks);
    menuRightHalf.appendChild(foodGrid);




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
    
    return content;
} 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLyogSSBLTk9XIEhPVyBXRSBDQU4gTUFLRSBJVCBMSU5FIFVQISEhXFxuICAgIEpVU1QgTUFLRSAuTUVOVS1DT05UQUlORVIgQkUgMyBDT0xVTU5TLFxcbiAgICBUSEVOIFNQQU4gVEhFIENPT0wtQkVJR0UgQUNST1NTIFRIT1NFIENPTFVNTlMsXFxuICAgIFxcbiAgICBUSEVOIENSRUFURSBBTk9USEVSIEdSSUQgSU5TSURFIENPTFVNTiAyLFxcbiAgICBBTkQgR0lWRSBJVCBUV08gQ09MVU1OUzogMUZSIEFORCAzRlIuXFxuXFxuICAgIFRIRU4gSU5TSURFIFRIRSBTRUNPTkQgQ09MVU1OLCBUSEUgT05FIFxcbiAgICBUSEFUIFRBS0VTIDNGUiwgUFVUIFRIRSBESVYgV0lUSCBUSEUgQUxNT1NULVdISVRFLFxcbiAgICBBTkQgVEhFIE9USEVSIENPTFVNTiBTVEFZUyBUSEUgU0FNRSBDT0xPVVIgQVMgT1VUU0lERSBUSElTXFxuICAgIFNFQ09ORCBHUklELCBXSElDSCBJUyBDT09MLUJFSUdFXFxuKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbW9zdC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxufVxcblxcbi5tZW51LWNlbnRlci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLm1lbnUtZ3JpZC1iZyB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5tZW51LXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OXB4IDFmcjtcXG59XFxuXFxuLm1lbnUtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZW5nbGlzaC1tZW51LFxcbi5rb3JlYW4tbWVudSxcXG4uc3BhbmlzaC1tZW51IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEyOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zb2Z0LXJlZCk7XFxufVxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvb2QtZ3JpZCA+IGRpdiB7XFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmx1ZSAycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0NBQWtDOztBQUV0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHOztBQUVIO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOzs7Ozs7R0FNRzs7O0FBR0g7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOzs7QUFHQTs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7OztJQUdJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixvSUFBb0k7SUFDcEksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLyogSSBLTk9XIEhPVyBXRSBDQU4gTUFLRSBJVCBMSU5FIFVQISEhXFxuICAgIEpVU1QgTUFLRSAuTUVOVS1DT05UQUlORVIgQkUgMyBDT0xVTU5TLFxcbiAgICBUSEVOIFNQQU4gVEhFIENPT0wtQkVJR0UgQUNST1NTIFRIT1NFIENPTFVNTlMsXFxuICAgIFxcbiAgICBUSEVOIENSRUFURSBBTk9USEVSIEdSSUQgSU5TSURFIENPTFVNTiAyLFxcbiAgICBBTkQgR0lWRSBJVCBUV08gQ09MVU1OUzogMUZSIEFORCAzRlIuXFxuXFxuICAgIFRIRU4gSU5TSURFIFRIRSBTRUNPTkQgQ09MVU1OLCBUSEUgT05FIFxcbiAgICBUSEFUIFRBS0VTIDNGUiwgUFVUIFRIRSBESVYgV0lUSCBUSEUgQUxNT1NULVdISVRFLFxcbiAgICBBTkQgVEhFIE9USEVSIENPTFVNTiBTVEFZUyBUSEUgU0FNRSBDT0xPVVIgQVMgT1VUU0lERSBUSElTXFxuICAgIFNFQ09ORCBHUklELCBXSElDSCBJUyBDT09MLUJFSUdFXFxuKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbW9zdC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxufVxcblxcbi5tZW51LWNlbnRlci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLm1lbnUtZ3JpZC1iZyB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi5tZW51LXJpZ2h0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OXB4IDFmcjtcXG59XFxuXFxuLm1lbnUtbGVmdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZW5nbGlzaC1tZW51LFxcbi5rb3JlYW4tbWVudSxcXG4uc3BhbmlzaC1tZW51IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEyOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zb2Z0LXJlZCk7XFxufVxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvb2QtZ3JpZCA+IGRpdiB7XFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmx1ZSAycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBSYW1lbiBmcm9tICcuL3JhbWVuLWljb24ucG5nJztcbmltcG9ydCBMb2dvIGZyb20gJy4vbWF0c3V5YS1sb2dvLmdpZic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgICAvLyBhbGVydCgnVEVTVCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vTmF2aWdhdGlvbiBiYXIsIG9yIGNvbnRhaW5lclxuICAgIC8vIGNvbnN0IGhlYWRlckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhlYWRlckJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJhcicpO1xuXG4gICAgLy90aGUgbWF0c3V5YSBsb2dvXG4gICAgY29uc3QgbWF0c3V5YUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXRzdXlhTG9nby5zcmMgPSBMb2dvOyBcbiAgICBtYXRzdXlhTG9nby5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJylcblxuXG4gICAgLy9tYWluIGhlYWRlclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJyk7XG5cbiAgICAvL2NvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF0c3V5YUxvZ28pO1xuXG4gICAgLy9uYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgdWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LWxpc3QnKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtZW51TmF2LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBsaU5hdk9uZS5hcHBlbmRDaGlsZChtZW51TmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdk9uZSk7XG4gICAgXG4gICAgY29uc3QgbGlOYXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHN0b3JlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHN0b3JlTmF2LmlubmVySFRNTCA9ICdTdG9yZSBsb2NhdG9yJztcbiAgICBsaU5hdlR3by5hcHBlbmRDaGlsZChzdG9yZU5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZUd28pO1xuXG4gICAgXG4gICAgY29uc3QgbGlOYXZUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY29tcGFueU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb21wYW55TmF2LmlubmVySFRNTCA9ICdPdXIgY29tcGFueSc7XG4gICAgbGlOYXZUaHJlZS5hcHBlbmRDaGlsZChjb21wYW55TmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdlRocmVlKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGludmVzdG9yTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGludmVzdG9yTmF2LmlubmVySFRNTCA9ICdJbnZlc3RvciBpbmZvcm1hdGlvbic7XG4gICAgbGlOYXZGb3VyLmFwcGVuZENoaWxkKGludmVzdG9yTmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdkZvdXIpO1xuXG4gICAgY29uc3QgbGlOYXZGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBmdXR1cmVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZnV0dXJlTmF2LmlubmVySFRNTCA9ICdGdXR1cmUgZGV2ZWxvcG1lbnQnO1xuICAgIGxpTmF2Rml2ZS5hcHBlbmRDaGlsZChmdXR1cmVOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2Rml2ZSk7XG4gICAgXG4gICAgbWFpbk5hdi5hcHBlbmRDaGlsZCh1bE5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5OYXYpO1xuXG4gICAgLy8gY29uc3QgY29udGFpbmVyU2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb250YWluZXJTZWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItc2VjdGlvbnMnKTtcbiAgICAvLyBjb25zdCBjb250YWluZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnRhaW5lck1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIC8vIGNvbnRhaW5lclNlY3Rpb25zLmFwcGVuZENoaWxkKGNvbnRhaW5lck1lbnUpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lclN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnRhaW5lclN0b3JlLmlubmVySFRNTCA9ICdTdG9yZSBMb2NhdG9yJztcbiAgICAvLyBjb250YWluZXJTZWN0aW9ucy5hcHBlbmRDaGlsZChjb250YWluZXJTdG9yZSk7XG4gICBcbiAgIFxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckNvbXBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29uc3QgY29udGFpbmVySW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lckZ1dHVyZURldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIC8vRW5nbGlzaCBtZW51IHNlcGFyYXRvclxuICAgIGNvbnN0IHNlcGFyYXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvckRpdi5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3ItZGl2Jyk7XG4gICAgY29uc3QgcmFtZW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgcmFtZW5JY29uLnNyYyA9IFJhbWVuO1xuICAgIHJhbWVuSWNvbi5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJyk7XG4gICAgY29uc3QgbWVudUxhbmd1YWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmlubmVySFRNTCA9ICdFbmdsaXNoIE1lbnUnO1xuICAgIG1lbnVMYW5ndWFnZVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS1sYW5ndWFnZS10ZXh0Jyk7XG5cbiAgICAvLyAvL01lbnUgZGl2c1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgY29uc3QgbWVudUxhbmd1YWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVDZW50ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2VudGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2VudGVyLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q3VycmVudExhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51R3JpZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQtYmcnKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIGNvbnN0IG1lbnVSaWdodEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoJ21lbnUtcmlnaHQnKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVSaWdodEhhbGYpO1xuXG4gICAgY29uc3QgbWVudUxlZnR0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMZWZ0dEhhbGYuY2xhc3NMaXN0LmFkZCgnbWVudS1sZWZ0Jyk7XG4gICAgY29uc3QgZW5nbGlzaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBrb3JlYW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3BhbmlzaE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGVuZ2xpc2hNZW51LmNsYXNzTGlzdC5hZGQoJ2VuZ2xpc2gtbWVudScpO1xuICAgIGtvcmVhbk1lbnUuY2xhc3NMaXN0LmFkZCgna29yZWFuLW1lbnUnKTtcbiAgICBzcGFuaXNoTWVudS5jbGFzc0xpc3QuYWRkKCdzcGFuaXNoLW1lbnUnKTtcbiAgICBtZW51TGVmdHRIYWxmLmFwcGVuZENoaWxkKGVuZ2xpc2hNZW51KTtcbiAgICBtZW51TGVmdHRIYWxmLmFwcGVuZENoaWxkKGtvcmVhbk1lbnUpO1xuICAgIG1lbnVMZWZ0dEhhbGYuYXBwZW5kQ2hpbGQoc3BhbmlzaE1lbnUpO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUxlZnR0SGFsZik7XG5cbiAgICAvL1NlbGVjdGVkIG1lbnUgbGFuZ3VhZ2UgXG4gICAgY29uc3Qgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWxlY3RlZE1lbnVMYW5ndWFnZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1tZW51LWxhbmcnKTtcbiAgICBzZWxlY3RlZE1lbnVMYW5ndWFnZS5pbm5lckhUTUwgPSAnRW5nbGlzaCBNZW51JztcbiAgICBtZW51UmlnaHRIYWxmLmFwcGVuZENoaWxkKHNlbGVjdGVkTWVudUxhbmd1YWdlKTsgIFxuICAgIFxuICAgIC8vRk9PRCBHUklEISBcbiAgICBjb25zdCBmb29kR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RHcmlkLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZ3JpZCcpO1xuXG4gICAgY29uc3QgZ3l1bWVzaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjdXJyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJicSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNldE1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtb3JuaW5nTWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNpZGVEaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wcGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIEFQUEVORCBESVNIRVMgVE8gRk9PREdSSUQhXG4gICAgZm9vZEdyaWQuYXBwZW5kQ2hpbGQoZ3l1bWVzaGkpO1xuICAgIGZvb2RHcmlkLmFwcGVuZENoaWxkKGN1cnJ5KTtcbiAgICBmb29kR3JpZC5hcHBlbmRDaGlsZChiYnEpO1xuICAgIGZvb2RHcmlkLmFwcGVuZENoaWxkKHNldE1lYWwpO1xuICAgIGZvb2RHcmlkLmFwcGVuZENoaWxkKG1vcm5pbmdNZWFsKTtcbiAgICBmb29kR3JpZC5hcHBlbmRDaGlsZChzaWRlRGlzaCk7XG4gICAgZm9vZEdyaWQuYXBwZW5kQ2hpbGQodG9wcGluZ3MpO1xuICAgIGZvb2RHcmlkLmFwcGVuZENoaWxkKGRyaW5rcyk7XG4gICAgbWVudVJpZ2h0SGFsZi5hcHBlbmRDaGlsZChmb29kR3JpZCk7XG5cblxuXG5cbiAgICAvL2NsYXNzIGxpc3RzXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gY29udGFpbmVyLmFwcGVuZChjb250YWluZXJTZWN0aW9ucyk7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKHJhbWVuSWNvbik7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKG1lbnVMYW5ndWFnZVRleHQpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yRGl2KTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50O1xufSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=