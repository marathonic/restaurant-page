/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-store-locator.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-store-locator.css ***!
  \***************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nbody {\n    margin: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n\n}\n\n.header-bar {\n    display: flex;\n    background-color: var(--cool-mustard);\n    grid-column: 2;\n    border-radius: 16px;\n}\n\n/* .header-bg {\n} */\n\n.separator-div {\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 37px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-mustard);\n    border-radius: 21px;\n}\n\n.container {\n    min-width: auto;\n    padding-top: 50px;\n    margin: 0 auto;\n}\n\n.main-header .container {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n    text-align: center;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n\n.main-nav a {\n    display: inline-block;\n    margin: 10px;\n    color: rebeccapurple;\n    font-weight: bold;\n}\n\n.main-nav a:hover {\n    cursor: pointer;\n    color: crimson;\n\n}\n\n.main-nav a:last-child {\n    padding-right: 20px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.stores-grid-bg {\n    grid-column: 2;\n    background-color: whitesmoke;\n    display: grid;\n}\n\n.menu-right {\n    grid-row: 1 / 3;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n    border-bottom: solid whitesmoke 3px;\n    border-right: solid whitesmoke 3px;\n    box-shadow: 1px 4px 4px gainsboro;\n}\n\n.food-grid-outer {\n    background-color: whitesmoke;\n    grid-row: 2;\n    margin-top: 15px;\n    padding: 20px;\n}\n\n.food-grid-inner {\n    background-color: var(--cool-beige);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: 3px;\n    padding-bottom: 10px;\n    flex-wrap: wrap;\n    border-radius: 4px;\n\n}\n\n.food-grid-inner > img {\n    margin: 2px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 3px;\n    z-index: 3;\n}\n\n.food-grid-inner > img:hover {\n    cursor: pointer;\n}\n\n.svg {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n/* WE'RE TESTING HOW WE'RE GOING TO APPLY THE IMAGES\nTO THE DISH DIVS. GYUMESHI WITH CSS, THE REST WITH JS */\n\n", "",{"version":3,"sources":["webpack://./src/style-store-locator.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;IACvB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;IACnC,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,mCAAmC;IACnC,kCAAkC;;AAEtC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,mBAAmB;AACvB;;AAEA;GACG;;AAEH;IACI,cAAc;IACd,WAAW;IACX,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;;;GAMG;;;AAGH;IACI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,cAAc;IACd,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;AACnB;;;AAGA;IACI,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,qBAAqB;IACrB,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,cAAc;;AAElB;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;;;;;;;;;;;CAWC;;AAED;IACI,uBAAuB;IACvB,WAAW;IACX,qCAAqC;IACrC,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,aAAa;IACb,4BAA4B;AAChC;;;AAGA;IACI,YAAY;IACZ,4BAA4B;IAC5B,oIAAoI;IACpI,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,mCAAmC;IACnC,kCAAkC;IAClC,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;uDACuD","sourcesContent":["*, *::after, *::before {\n    box-sizing: border-box;\n}\n\n:root {\n    font-family: Arial, Helvetica, sans-serif;\n    --cool-mustard: #ebe98c;\n    --cool-beige: #e6e0c8;\n    --almost-beige: #f5f0db;\n    --soft-red: #ffafca;\n}\n\nbody {\n    margin: 0;\n}\n\n.hello {\n    color: black;\n    font-size: 200px;\n    /* background: url('./ryuzaki.jpg'); */\n}\n\nimg {\n    min-height: auto;\n    min-width: auto;\n}\n\nh1 {\n    font-size: 100px;\n}\n\n.background {\n    background-color: var(--cool-beige);\n    min-width: 100vw;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n\n}\n\n.header-bar {\n    display: flex;\n    background-color: var(--cool-mustard);\n    grid-column: 2;\n    border-radius: 16px;\n}\n\n/* .header-bg {\n} */\n\n.separator-div {\n    grid-column: 2;\n    grid-row: 2;\n    display: flex;\n    align-items: center;\n\n}\n\n.small-icon {\n    max-width: 50%;\n    max-height: 50%;\n}\n\n/* .header-sections {\n    display: flex;\n    background-color: whitesmoke;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n} */\n\n\n.menu-language-text {\n    color: rebeccapurple;\n    font-size: 37px;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n\n.main-header {\n    grid-column: 2;\n    background-color: var(--cool-mustard);\n    border-radius: 21px;\n}\n\n.container {\n    min-width: auto;\n    padding-top: 50px;\n    margin: 0 auto;\n}\n\n.main-header .container {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n\n.main-nav {\n    background-color: whitesmoke;\n    border-radius: 12px;\n}\n\n.main-nav ul {\n    margin: 1em 0 0.5em;\n    text-align: center;\n}\n\n.main-nav li {\n    display: inline;\n}\n\n\n.main-nav a {\n    display: inline-block;\n    margin: 10px;\n    color: rebeccapurple;\n    font-weight: bold;\n}\n\n.main-nav a:hover {\n    cursor: pointer;\n    color: crimson;\n\n}\n\n.main-nav a:last-child {\n    padding-right: 20px;\n}\n\n\n/* I KNOW HOW WE CAN MAKE IT LINE UP!!!\n    JUST MAKE .MENU-CONTAINER BE 3 COLUMNS,\n    THEN SPAN THE COOL-BEIGE ACROSS THOSE COLUMNS,\n    \n    THEN CREATE ANOTHER GRID INSIDE COLUMN 2,\n    AND GIVE IT TWO COLUMNS: 1FR AND 3FR.\n\n    THEN INSIDE THE SECOND COLUMN, THE ONE \n    THAT TAKES 3FR, PUT THE DIV WITH THE ALMOST-WHITE,\n    AND THE OTHER COLUMN STAYS THE SAME COLOUR AS OUTSIDE THIS\n    SECOND GRID, WHICH IS COOL-BEIGE\n*/\n\n.menu-container {\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    background-color: var(--almost-beige);\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.menu-center-container {\n    grid-column: 2;\n}\n\n.stores-grid-bg {\n    grid-column: 2;\n    background-color: whitesmoke;\n    display: grid;\n}\n\n.menu-right {\n    grid-row: 1 / 3;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 49px 1fr;\n}\n\n\n.selected-menu-lang {\n    height: 49px;\n    background: rgb(255,255,255);\n    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242, 255, 207) 20%, rgb(253, 242, 221) 54%, rgba(247,226,185,1) 100%);\n    color: darkslateblue;\n    font-size: 23px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    border-radius: 10px;\n    border-bottom: solid whitesmoke 3px;\n    border-right: solid whitesmoke 3px;\n    box-shadow: 1px 4px 4px gainsboro;\n}\n\n.food-grid-outer {\n    background-color: whitesmoke;\n    grid-row: 2;\n    margin-top: 15px;\n    padding: 20px;\n}\n\n.food-grid-inner {\n    background-color: var(--cool-beige);\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    padding: 3px;\n    padding-bottom: 10px;\n    flex-wrap: wrap;\n    border-radius: 4px;\n\n}\n\n.food-grid-inner > img {\n    margin: 2px;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 3px;\n    z-index: 3;\n}\n\n.food-grid-inner > img:hover {\n    cursor: pointer;\n}\n\n.svg {\n    max-width: 20px;\n    max-height: 20px;\n}\n\n/* WE'RE TESTING HOW WE'RE GOING TO APPLY THE IMAGES\nTO THE DISH DIVS. GYUMESHI WITH CSS, THE REST WITH JS */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ "./src/style-store-locator.css":
/*!*************************************!*\
  !*** ./src/style-store-locator.css ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_store_locator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-store-locator.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-store-locator.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_store_locator_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_store_locator_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_store_locator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_store_locator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/makeBody.js":
/*!*************************!*\
  !*** ./src/makeBody.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearBody)
/* harmony export */ });
function clearBody() {
   document.body.innerHTML = '';
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/storeLocator.js":
/*!*****************************!*\
  !*** ./src/storeLocator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storeLocator)
/* harmony export */ });
/* harmony import */ var _style_store_locator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-store-locator.css */ "./src/style-store-locator.css");
/* harmony import */ var _matsuya_logo_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matsuya-logo.gif */ "./src/matsuya-logo.gif");



function storeLocator() {

    
    const content = document.createElement('div');
    document.body.appendChild(content);
    const background = document.createElement('div');

    //the matsuya logo
    const matsuyaLogo = new Image();
    matsuyaLogo.src = _matsuya_logo_gif__WEBPACK_IMPORTED_MODULE_1__; 
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
    const iconNavTwo = document.createElement('li');

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

    
    mainNav.appendChild(ulNav);
    container.appendChild(mainNav);

    //English menu separator
    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add('separator-div');
    const menuLanguageText = document.createElement('p');
    menuLanguageText.innerHTML = 'Store locations';
    menuLanguageText.classList.add('menu-language-text');

    // //Menu divs
    const menuContainer = document.createElement('div');


    const menuCenterContainer = document.createElement('div');
    menuCenterContainer.classList.add('menu-center-container');
    
    const storesDiv = document.createElement('div');

    menuContainer.classList.add('menu-container');
    storesDiv.classList.add('stores-grid-bg');
    menuContainer.appendChild(storesDiv);
    const menuRightHalf = document.createElement('div');
    menuRightHalf.classList.add('menu-right');


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

    background.classList.add('background');

    content.appendChild(background);
    background.appendChild(mainHeader);
    mainHeader.appendChild(container);
    
    separatorDiv.appendChild(menuLanguageText);
    background.appendChild(separatorDiv);
    background.appendChild(menuContainer);
    
    return content;

}


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _storeLocator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeLocator.js */ "./src/storeLocator.js");
/* harmony import */ var _makeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeBody.js */ "./src/makeBody.js");




window.addEventListener('DOMContentLoaded', (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

document.querySelector('#store-locator-anchor')
        .addEventListener('click', function(){
            (0,_makeBody_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            (0,_storeLocator_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        });

document.querySelector('#menu-anchor')
        .addEventListener('click', function(){
            (0,_makeBody_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        })

// !!!!!! THIS GOES BEFORE ANYTHING ELSE:
//Load initial landing page, our Menu
// document.addEventListener('DOMContentLoaded', menu());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDVztBQUNQOztBQUV0Qyw0Q0FBNEMseURBQUk7O0FBRWhEO0FBQ0E7QUFDQSxZQUFZLHdEQUFTO0FBQ3JCLFlBQVksNERBQVk7QUFDeEIsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsWUFBWSx3REFBUztBQUNyQixZQUFZLHlEQUFJO0FBQ2hCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLXN0b3JlLWxvY2F0b3IuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUtc3RvcmUtbG9jYXRvci5jc3M/ZjUyZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFrZUJvZHkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmVMb2NhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29vbC1tdXN0YXJkOiAjZWJlOThjO1xcbiAgICAtLWNvb2wtYmVpZ2U6ICNlNmUwYzg7XFxuICAgIC0tYWxtb3N0LWJlaWdlOiAjZjVmMGRiO1xcbiAgICAtLXNvZnQtcmVkOiAjZmZhZmNhO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9yeXV6YWtpLmpwZycpOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcblxcbn1cXG5cXG4uaGVhZGVyLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4vKiAuaGVhZGVyLWJnIHtcXG59ICovXFxuXFxuLnNlcGFyYXRvci1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5zbWFsbC1pY29uIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxuLyogLmhlYWRlci1zZWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn0gKi9cXG5cXG5cXG4ubWVudS1sYW5ndWFnZS10ZXh0IHtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtc2l6ZTogMzdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4taGVhZGVyIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwge1xcbiAgICBtYXJnaW46IDFlbSAwIDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLm1haW4tbmF2IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1uYXYgYTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuXFxufVxcblxcbi5tYWluLW5hdiBhOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiBJIEtOT1cgSE9XIFdFIENBTiBNQUtFIElUIExJTkUgVVAhISFcXG4gICAgSlVTVCBNQUtFIC5NRU5VLUNPTlRBSU5FUiBCRSAzIENPTFVNTlMsXFxuICAgIFRIRU4gU1BBTiBUSEUgQ09PTC1CRUlHRSBBQ1JPU1MgVEhPU0UgQ09MVU1OUyxcXG4gICAgXFxuICAgIFRIRU4gQ1JFQVRFIEFOT1RIRVIgR1JJRCBJTlNJREUgQ09MVU1OIDIsXFxuICAgIEFORCBHSVZFIElUIFRXTyBDT0xVTU5TOiAxRlIgQU5EIDNGUi5cXG5cXG4gICAgVEhFTiBJTlNJREUgVEhFIFNFQ09ORCBDT0xVTU4sIFRIRSBPTkUgXFxuICAgIFRIQVQgVEFLRVMgM0ZSLCBQVVQgVEhFIERJViBXSVRIIFRIRSBBTE1PU1QtV0hJVEUsXFxuICAgIEFORCBUSEUgT1RIRVIgQ09MVU1OIFNUQVlTIFRIRSBTQU1FIENPTE9VUiBBUyBPVVRTSURFIFRISVNcXG4gICAgU0VDT05EIEdSSUQsIFdISUNIIElTIENPT0wtQkVJR0VcXG4qL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxtb3N0LWJlaWdlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG59XFxuXFxuLm1lbnUtY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc3RvcmVzLWdyaWQtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1lbnUtcmlnaHQge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDlweCAxZnI7XFxufVxcblxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uZm9vZC1ncmlkLW91dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWcge1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogV0UnUkUgVEVTVElORyBIT1cgV0UnUkUgR09JTkcgVE8gQVBQTFkgVEhFIElNQUdFU1xcblRPIFRIRSBESVNIIERJVlMuIEdZVU1FU0hJIFdJVEggQ1NTLCBUSEUgUkVTVCBXSVRIIEpTICovXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLXN0b3JlLWxvY2F0b3IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7Ozs7O0dBTUc7OztBQUdIO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBOzs7Ozs7Ozs7OztDQVdDOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixvSUFBb0k7SUFDcEksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO3VEQUN1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG5cXG59XFxuXFxuLm1haW4tbmF2IGE6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEkgS05PVyBIT1cgV0UgQ0FOIE1BS0UgSVQgTElORSBVUCEhIVxcbiAgICBKVVNUIE1BS0UgLk1FTlUtQ09OVEFJTkVSIEJFIDMgQ09MVU1OUyxcXG4gICAgVEhFTiBTUEFOIFRIRSBDT09MLUJFSUdFIEFDUk9TUyBUSE9TRSBDT0xVTU5TLFxcbiAgICBcXG4gICAgVEhFTiBDUkVBVEUgQU5PVEhFUiBHUklEIElOU0lERSBDT0xVTU4gMixcXG4gICAgQU5EIEdJVkUgSVQgVFdPIENPTFVNTlM6IDFGUiBBTkQgM0ZSLlxcblxcbiAgICBUSEVOIElOU0lERSBUSEUgU0VDT05EIENPTFVNTiwgVEhFIE9ORSBcXG4gICAgVEhBVCBUQUtFUyAzRlIsIFBVVCBUSEUgRElWIFdJVEggVEhFIEFMTU9TVC1XSElURSxcXG4gICAgQU5EIFRIRSBPVEhFUiBDT0xVTU4gU1RBWVMgVEhFIFNBTUUgQ09MT1VSIEFTIE9VVFNJREUgVEhJU1xcbiAgICBTRUNPTkQgR1JJRCwgV0hJQ0ggSVMgQ09PTC1CRUlHRVxcbiovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbG1vc3QtYmVpZ2UpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1jZW50ZXItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5zdG9yZXMtZ3JpZC1iZyB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVudS1yaWdodCB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0OXB4IDFmcjtcXG59XFxuXFxuXFxuLnNlbGVjdGVkLW1lbnUtbGFuZyB7XFxuICAgIGhlaWdodDogNDlweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDI1NSwgMjU1LCAyNTUpIDAlLCByZ2IoMjQyLCAyNTUsIDIwNykgMjAlLCByZ2IoMjUzLCAyNDIsIDIyMSkgNTQlLCByZ2JhKDI0NywyMjYsMTg1LDEpIDEwMCUpO1xcbiAgICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlc21va2UgM3B4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHdoaXRlc21va2UgM3B4O1xcbiAgICBib3gtc2hhZG93OiAxcHggNHB4IDRweCBnYWluc2Jvcm87XFxufVxcblxcbi5mb29kLWdyaWQtb3V0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZyB7XFxuICAgIG1hcmdpbjogMnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyID4gaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3ZnIHtcXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBXRSdSRSBURVNUSU5HIEhPVyBXRSdSRSBHT0lORyBUTyBBUFBMWSBUSEUgSU1BR0VTXFxuVE8gVEhFIERJU0ggRElWUy4gR1lVTUVTSEkgV0lUSCBDU1MsIFRIRSBSRVNUIFdJVEggSlMgKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG5cXG59XFxuXFxuLm1haW4tbmF2IGE6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEkgS05PVyBIT1cgV0UgQ0FOIE1BS0UgSVQgTElORSBVUCEhIVxcbiAgICBKVVNUIE1BS0UgLk1FTlUtQ09OVEFJTkVSIEJFIDMgQ09MVU1OUyxcXG4gICAgVEhFTiBTUEFOIFRIRSBDT09MLUJFSUdFIEFDUk9TUyBUSE9TRSBDT0xVTU5TLFxcbiAgICBcXG4gICAgVEhFTiBDUkVBVEUgQU5PVEhFUiBHUklEIElOU0lERSBDT0xVTU4gMixcXG4gICAgQU5EIEdJVkUgSVQgVFdPIENPTFVNTlM6IDFGUiBBTkQgM0ZSLlxcblxcbiAgICBUSEVOIElOU0lERSBUSEUgU0VDT05EIENPTFVNTiwgVEhFIE9ORSBcXG4gICAgVEhBVCBUQUtFUyAzRlIsIFBVVCBUSEUgRElWIFdJVEggVEhFIEFMTU9TVC1XSElURSxcXG4gICAgQU5EIFRIRSBPVEhFUiBDT0xVTU4gU1RBWVMgVEhFIFNBTUUgQ09MT1VSIEFTIE9VVFNJREUgVEhJU1xcbiAgICBTRUNPTkQgR1JJRCwgV0hJQ0ggSVMgQ09PTC1CRUlHRVxcbiovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbG1vc3QtYmVpZ2UpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1jZW50ZXItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5tZW51LWdyaWQtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubWVudS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDlweCAxZnI7XFxufVxcblxcbi5tZW51LWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjdweDtcXG59XFxuXFxuLm1lbnUtbGVmdCA+IGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG1heC13aWR0aDogMTg5cHg7XFxuICAgIG1heC1oZWlnaHQ6IDc3cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxuICAgIGZpbHRlcjogb3BhY2l0eSg3MCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uZm9vZC1ncmlkLW91dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWcge1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogV0UnUkUgVEVTVElORyBIT1cgV0UnUkUgR09JTkcgVE8gQVBQTFkgVEhFIElNQUdFU1xcblRPIFRIRSBESVNIIERJVlMuIEdZVU1FU0hJIFdJVEggQ1NTLCBUSEUgUkVTVCBXSVRIIEpTICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0dBQ0c7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOzs7QUFHSDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixvSUFBb0k7SUFDcEksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO3VEQUN1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb29sLW11c3RhcmQ6ICNlYmU5OGM7XFxuICAgIC0tY29vbC1iZWlnZTogI2U2ZTBjODtcXG4gICAgLS1hbG1vc3QtYmVpZ2U6ICNmNWYwZGI7XFxuICAgIC0tc29mdC1yZWQ6ICNmZmFmY2E7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWxsbyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuL3J5dXpha2kuanBnJyk7ICovXFxufVxcblxcbmltZyB7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtYmVpZ2UpO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuXFxufVxcblxcbi5oZWFkZXItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi8qIC5oZWFkZXItYmcge1xcbn0gKi9cXG5cXG4uc2VwYXJhdG9yLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnNtYWxsLWljb24ge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG4vKiAuaGVhZGVyLXNlY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufSAqL1xcblxcblxcbi5tZW51LWxhbmd1YWdlLXRleHQge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAzN3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1tdXN0YXJkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tYWluLW5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5tYWluLW5hdiB1bCB7XFxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLW5hdiBhOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG5cXG59XFxuXFxuLm1haW4tbmF2IGE6bGFzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi8qIEkgS05PVyBIT1cgV0UgQ0FOIE1BS0UgSVQgTElORSBVUCEhIVxcbiAgICBKVVNUIE1BS0UgLk1FTlUtQ09OVEFJTkVSIEJFIDMgQ09MVU1OUyxcXG4gICAgVEhFTiBTUEFOIFRIRSBDT09MLUJFSUdFIEFDUk9TUyBUSE9TRSBDT0xVTU5TLFxcbiAgICBcXG4gICAgVEhFTiBDUkVBVEUgQU5PVEhFUiBHUklEIElOU0lERSBDT0xVTU4gMixcXG4gICAgQU5EIEdJVkUgSVQgVFdPIENPTFVNTlM6IDFGUiBBTkQgM0ZSLlxcblxcbiAgICBUSEVOIElOU0lERSBUSEUgU0VDT05EIENPTFVNTiwgVEhFIE9ORSBcXG4gICAgVEhBVCBUQUtFUyAzRlIsIFBVVCBUSEUgRElWIFdJVEggVEhFIEFMTU9TVC1XSElURSxcXG4gICAgQU5EIFRIRSBPVEhFUiBDT0xVTU4gU1RBWVMgVEhFIFNBTUUgQ09MT1VSIEFTIE9VVFNJREUgVEhJU1xcbiAgICBTRUNPTkQgR1JJRCwgV0hJQ0ggSVMgQ09PTC1CRUlHRVxcbiovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbG1vc3QtYmVpZ2UpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1jZW50ZXItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5tZW51LWdyaWQtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubWVudS1yaWdodCB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDlweCAxZnI7XFxufVxcblxcbi5tZW51LWxlZnQge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjdweDtcXG59XFxuXFxuLm1lbnUtbGVmdCA+IGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG1heC13aWR0aDogMTg5cHg7XFxuICAgIG1heC1oZWlnaHQ6IDc3cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWc6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxuICAgIGZpbHRlcjogb3BhY2l0eSg3MCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uZm9vZC1ncmlkLW91dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWcge1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogV0UnUkUgVEVTVElORyBIT1cgV0UnUkUgR09JTkcgVE8gQVBQTFkgVEhFIElNQUdFU1xcblRPIFRIRSBESVNIIERJVlMuIEdZVU1FU0hJIFdJVEggQ1NTLCBUSEUgUkVTVCBXSVRIIEpTICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1zdG9yZS1sb2NhdG9yLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtc3RvcmUtbG9jYXRvci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJCb2R5KCkge1xuICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBSYW1lbiBmcm9tICcuL3JhbWVuLWljb24ucG5nJztcbmltcG9ydCBMb2dvIGZyb20gJy4vbWF0c3V5YS1sb2dvLmdpZic7XG5pbXBvcnQgR3l1bWVzaGkgZnJvbSAnLi9pbWcvbWVudS1lbmcvZ3l1bWVzaGkuanBnJztcbmltcG9ydCBDdXJyeSBmcm9tICcuL2ltZy9tZW51LWVuZy9jdXJyeS5wbmcnO1xuaW1wb3J0IEJvd2wgZnJvbSAnLi9pbWcvbWVudS1lbmcvYm93bC5wbmcnO1xuaW1wb3J0IFNldE1lYWxzIGZyb20gJy4vaW1nL21lbnUtZW5nL3NldC1tZWFscy5wbmcnO1xuaW1wb3J0IE1vcm5pbmdNZWFscyBmcm9tICcuL2ltZy9tZW51LWVuZy9tb3JuaW5nLW1lYWxzLnBuZyc7XG5pbXBvcnQgU2lkZURpc2hlcyBmcm9tICcuL2ltZy9tZW51LWVuZy9zaWRlLWRpc2hlcy5wbmcnO1xuaW1wb3J0IFRvcHBpbmdzIGZyb20gJy4vaW1nL21lbnUtZW5nL3RvcHBpbmdzLnBuZyc7XG5pbXBvcnQgRHJpbmtzIGZyb20gJy4vaW1nL21lbnUtZW5nL2RyaW5rcy5wbmcnO1xuXG5pbXBvcnQgRW5nTWVudSBmcm9tICcuL2ltZy9tZW51LXNlbGVjdC9lbi5qcGcnO1xuaW1wb3J0IEtvck1lbnUgZnJvbSAnLi9pbWcvbWVudS1zZWxlY3Qva29yLmpwZyc7XG5cblxuXG4vLyBXRSBNQVkgVkVSWSBXRUxMIFdJU0ggVE8gU0VQQVJBVEUgVEhJUyBJTlRPIFxuLy8gU0VWRVJBTCBTTUFMTEVSIEZVTkNUSU9OUywgRUFDSCBBUFBFTkRJTkcgU09NRVRISU5HXG4vLyBUTyBPVVIgQkFDS0dST1VORC4gVEhFTiwgUlVOIEFMTCBUSEUgRlVOQ1RJT05TIElOIElOREVYLkpTXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG5cbiAgICAvLyBhbGVydCgnVEVTVCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vTmF2aWdhdGlvbiBiYXIsIG9yIGNvbnRhaW5lclxuICAgIC8vIGNvbnN0IGhlYWRlckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhlYWRlckJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJhcicpO1xuXG4gICAgLy90aGUgbWF0c3V5YSBsb2dvXG4gICAgY29uc3QgbWF0c3V5YUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXRzdXlhTG9nby5zcmMgPSBMb2dvOyBcbiAgICBtYXRzdXlhTG9nby5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJylcblxuXG4gICAgLy9tYWluIGhlYWRlclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJyk7XG5cbiAgICAvL2NvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF0c3V5YUxvZ28pO1xuXG4gICAgLy9uYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgdWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LWxpc3QnKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBcbiAgICBtZW51TmF2LmlkID0gJ21lbnUtYW5jaG9yJztcbiAgICBtZW51TmF2LmlubmVySFRNTCA9ICdNZW51JztcblxuICAgIGxpTmF2T25lLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2T25lKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc2hvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIHNob3BOYXYuaWQgPSAnc3RvcmUtbG9jYXRvci1hbmNob3InO1xuICAgIHNob3BOYXYuaW5uZXJIVE1MID0gJ1N0b3JlIGxvY2F0b3InO1xuXG4gICAgbGlOYXZUd28uYXBwZW5kQ2hpbGQoc2hvcE5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZUd28pO1xuXG4gICAgXG4gICAgY29uc3QgbGlOYXZUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY29tcGFueU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb21wYW55TmF2LmlubmVySFRNTCA9ICdPdXIgY29tcGFueSc7XG4gICAgbGlOYXZUaHJlZS5hcHBlbmRDaGlsZChjb21wYW55TmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdlRocmVlKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGludmVzdG9yTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGludmVzdG9yTmF2LmlubmVySFRNTCA9ICdJbnZlc3RvciBpbmZvcm1hdGlvbic7XG4gICAgbGlOYXZGb3VyLmFwcGVuZENoaWxkKGludmVzdG9yTmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdkZvdXIpO1xuXG4gICAgLy8gY29uc3QgbGlOYXZGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBjb25zdCBmdXR1cmVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgLy8gZnV0dXJlTmF2LmlubmVySFRNTCA9ICdGdXR1cmUgZGV2ZWxvcG1lbnQnO1xuICAgIC8vIGxpTmF2Rml2ZS5hcHBlbmRDaGlsZChmdXR1cmVOYXYpO1xuICAgIC8vIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2Rml2ZSk7XG4gICAgXG4gICAgbWFpbk5hdi5hcHBlbmRDaGlsZCh1bE5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5OYXYpO1xuXG4gICAgLy8gY29uc3QgY29udGFpbmVyU2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb250YWluZXJTZWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItc2VjdGlvbnMnKTtcbiAgICAvLyBjb25zdCBjb250YWluZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnRhaW5lck1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIC8vIGNvbnRhaW5lclNlY3Rpb25zLmFwcGVuZENoaWxkKGNvbnRhaW5lck1lbnUpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lclN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnRhaW5lclN0b3JlLmlubmVySFRNTCA9ICdTdG9yZSBMb2NhdG9yJztcbiAgICAvLyBjb250YWluZXJTZWN0aW9ucy5hcHBlbmRDaGlsZChjb250YWluZXJTdG9yZSk7XG4gICBcbiAgIFxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckNvbXBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29uc3QgY29udGFpbmVySW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lckZ1dHVyZURldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIC8vRW5nbGlzaCBtZW51IHNlcGFyYXRvclxuICAgIGNvbnN0IHNlcGFyYXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvckRpdi5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3ItZGl2Jyk7XG4gICAgY29uc3QgcmFtZW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgcmFtZW5JY29uLnNyYyA9IFJhbWVuO1xuICAgIHJhbWVuSWNvbi5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJyk7XG4gICAgY29uc3QgbWVudUxhbmd1YWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmlubmVySFRNTCA9ICdFbmdsaXNoIE1lbnUnO1xuICAgIG1lbnVMYW5ndWFnZVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS1sYW5ndWFnZS10ZXh0Jyk7XG5cbiAgICAvLyAvL01lbnUgZGl2c1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgY29uc3QgbWVudUxhbmd1YWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVDZW50ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2VudGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2VudGVyLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q3VycmVudExhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51R3JpZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQtYmcnKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIGNvbnN0IG1lbnVSaWdodEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoJ21lbnUtcmlnaHQnKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVSaWdodEhhbGYpO1xuXG4gICAgY29uc3QgbWVudUxlZnR0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMZWZ0dEhhbGYuY2xhc3NMaXN0LmFkZCgnbWVudS1sZWZ0Jyk7XG4gICAgY29uc3QgZW5nbGlzaE1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBlbmdsaXNoTWVudS5zcmMgPSBFbmdNZW51O1xuXG4gICAgY29uc3Qga29yZWFuTWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIGtvcmVhbk1lbnUuc3JjID0gS29yTWVudTtcbiAgICBcbiAgICBjb25zdCBzcGFuaXNoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWVudUxlZnR0SGFsZi5hcHBlbmRDaGlsZChlbmdsaXNoTWVudSk7XG4gICAgbWVudUxlZnR0SGFsZi5hcHBlbmRDaGlsZChrb3JlYW5NZW51KTtcbiAgICBtZW51TGVmdHRIYWxmLmFwcGVuZENoaWxkKHNwYW5pc2hNZW51KTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVMZWZ0dEhhbGYpO1xuXG4gICAgLy9TZWxlY3RlZCBtZW51IGxhbmd1YWdlIFxuICAgIGNvbnN0IHNlbGVjdGVkTWVudUxhbmd1YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtbWVudS1sYW5nJyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuaW5uZXJIVE1MID0gJ0VuZ2xpc2ggTWVudSc7XG4gICAgbWVudVJpZ2h0SGFsZi5hcHBlbmRDaGlsZChzZWxlY3RlZE1lbnVMYW5ndWFnZSk7ICBcbiAgICBcbiAgICAvL0ZPT0QgR1JJRCEgXG4gICAgY29uc3QgZm9vZEdyaWRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RHcmlkSW5uZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkLWlubmVyJyk7XG5cbiAgICBjb25zdCBmb29kR3JpZE91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZEdyaWRPdXRlci5jbGFzc0xpc3QuYWRkKCdmb29kLWdyaWQtb3V0ZXInKTtcblxuICAgIGNvbnN0IGd5dW1lc2hpID0gbmV3IEltYWdlKCk7XG4gICAgZ3l1bWVzaGkuc3JjID0gR3l1bWVzaGk7XG4gICAgXG4gICAgLy9UUllJTkcgT1VUIFNFQ09ORCBJTUcgTUVUSE9EXG4gICAgY29uc3QgY3VycnkgPSBuZXcgSW1hZ2UoKTtcbiAgICBjdXJyeS5zcmMgPSBDdXJyeTtcblxuICAgIC8vVEhJUyBTRUNPTkQgV0FZIExPT0tTIEEgTE9UIEJFVFRFUiFcblxuXG4gICAgY29uc3QgYm93bCA9IG5ldyBJbWFnZSgpO1xuICAgIGJvd2wuc3JjID0gQm93bDtcbiAgICBjb25zdCBzZXRNZWFsID0gbmV3IEltYWdlKCk7XG4gICAgc2V0TWVhbC5zcmMgPSBTZXRNZWFscztcbiAgICBjb25zdCBtb3JuaW5nTWVhbCA9IG5ldyBJbWFnZSgpO1xuICAgIG1vcm5pbmdNZWFsLnNyYyA9IE1vcm5pbmdNZWFscztcblxuICAgIGNvbnN0IHNpZGVEaXNoZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBzaWRlRGlzaGVzLnNyYyA9IFNpZGVEaXNoZXM7XG4gICAgY29uc3QgdG9wcGluZ3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b3BwaW5ncy5zcmMgPSBUb3BwaW5ncztcblxuICAgIGNvbnN0IGRyaW5rcyA9IG5ldyBJbWFnZSgpO1xuICAgIGRyaW5rcy5zcmMgPSBEcmlua3M7XG5cbiAgICAvLyBBUFBFTkQgRElTSEVTIFRPIEZPT0RHUklEIVxuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoZ3l1bWVzaGkpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoY3VycnkpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoYm93bCk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChzZXRNZWFsKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKG1vcm5pbmdNZWFsKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKHNpZGVEaXNoZXMpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQodG9wcGluZ3MpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcbiAgICBmb29kR3JpZE91dGVyLmFwcGVuZENoaWxkKGZvb2RHcmlkSW5uZXIpO1xuICAgIG1lbnVSaWdodEhhbGYuYXBwZW5kQ2hpbGQoZm9vZEdyaWRPdXRlcik7XG5cbiAgICAvL2FkZCBpbWFnZXMgdG8gZGlzaCBkaXZzIVxuXG4gICAgLy8gTGV0J3MgY29tcGFyZSB0d28gd2F5cyBvZiBkb2luZyB0aGlzOlxuXG4gICAgLy9XZSBoYXZlIHBsYWNlZCB0aGUgMXN0IGRpc2ggYXMgYSBiZyBpbWcgb24gdGhlIENTUy5cbiAgICAvL1dlIGNhbiBhbHNvIGp1c3Qgc3dpdGNoIHRoZSBjcmVhdGVFbGVtZW50KCdkaXYnKSdzIGZvclxuICAgIC8vY3JlYXRlRWxlbWVudCgnaW1nJykgYW5kIHNlZSB3aGF0IGhhcHBlbnMgXG5cblxuICAgIC8vIGNvbnN0IGd5dW1lc2hpUGljID0gbmV3IEltYWdlKCk7XG4gICAgLy8gZ3l1bWVzaGkuc3JjID0gR3l1bWVzaGk7XG4gICAgXG5cblxuXG5cbiAgICAvL2NsYXNzIGxpc3RzXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gY29udGFpbmVyLmFwcGVuZChjb250YWluZXJTZWN0aW9ucyk7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKHJhbWVuSWNvbik7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKG1lbnVMYW5ndWFnZVRleHQpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yRGl2KTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICBcbiAgICBjb25zb2xlLmxvZygnaG93IG1hbnkgdGltZXMgZG9lcyB0aGlzIHJ1bj8nKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufSAiLCJpbXBvcnQgJy4vc3R5bGUtc3RvcmUtbG9jYXRvci5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9tYXRzdXlhLWxvZ28uZ2lmJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmVMb2NhdG9yKCkge1xuXG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy90aGUgbWF0c3V5YSBsb2dvXG4gICAgY29uc3QgbWF0c3V5YUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXRzdXlhTG9nby5zcmMgPSBMb2dvOyBcbiAgICBtYXRzdXlhTG9nby5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJylcblxuXG4gICAgLy9tYWluIGhlYWRlclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJyk7XG5cbiAgICAvL2NvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF0c3V5YUxvZ28pO1xuXG4gICAgLy9uYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgdWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LWxpc3QnKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1lbnVOYXYuaWQgPSAnbWVudS1hbmNob3InO1xuXG4gICAgbWVudU5hdi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgXG5cblxuICAgIGxpTmF2T25lLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2T25lKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc2hvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpY29uTmF2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIHNob3BOYXYuaW5uZXJIVE1MID0gJ1N0b3JlIGxvY2F0b3InO1xuICAgIGxpTmF2VHdvLmFwcGVuZENoaWxkKHNob3BOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2VHdvKTtcblxuICAgIFxuICAgIGNvbnN0IGxpTmF2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbXBhbnlOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29tcGFueU5hdi5pbm5lckhUTUwgPSAnT3VyIGNvbXBhbnknO1xuICAgIGxpTmF2VGhyZWUuYXBwZW5kQ2hpbGQoY29tcGFueU5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZUaHJlZSk7XG4gICAgXG4gICAgY29uc3QgbGlOYXZGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpbnZlc3Rvck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbnZlc3Rvck5hdi5pbm5lckhUTUwgPSAnSW52ZXN0b3IgaW5mb3JtYXRpb24nO1xuICAgIGxpTmF2Rm91ci5hcHBlbmRDaGlsZChpbnZlc3Rvck5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZGb3VyKTtcblxuICAgIFxuICAgIG1haW5OYXYuYXBwZW5kQ2hpbGQodWxOYXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTmF2KTtcblxuICAgIC8vRW5nbGlzaCBtZW51IHNlcGFyYXRvclxuICAgIGNvbnN0IHNlcGFyYXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvckRpdi5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3ItZGl2Jyk7XG4gICAgY29uc3QgbWVudUxhbmd1YWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmlubmVySFRNTCA9ICdTdG9yZSBsb2NhdGlvbnMnO1xuICAgIG1lbnVMYW5ndWFnZVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS1sYW5ndWFnZS10ZXh0Jyk7XG5cbiAgICAvLyAvL01lbnUgZGl2c1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgY29uc3QgbWVudUNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDZW50ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jZW50ZXItY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3Qgc3RvcmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgc3RvcmVzRGl2LmNsYXNzTGlzdC5hZGQoJ3N0b3Jlcy1ncmlkLWJnJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZXNEaXYpO1xuICAgIGNvbnN0IG1lbnVSaWdodEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoJ21lbnUtcmlnaHQnKTtcblxuXG4gICAgLy9TZWxlY3RlZCBtZW51IGxhbmd1YWdlIFxuICAgIGNvbnN0IHNlbGVjdGVkTWVudUxhbmd1YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtbWVudS1sYW5nJyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuaW5uZXJIVE1MID0gJ0VuZ2xpc2ggTWVudSc7XG4gICAgbWVudVJpZ2h0SGFsZi5hcHBlbmRDaGlsZChzZWxlY3RlZE1lbnVMYW5ndWFnZSk7ICBcbiAgICBcbiAgICAvL0ZPT0QgR1JJRCEgXG4gICAgY29uc3QgZm9vZEdyaWRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RHcmlkSW5uZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkLWlubmVyJyk7XG5cbiAgICBjb25zdCBmb29kR3JpZE91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZEdyaWRPdXRlci5jbGFzc0xpc3QuYWRkKCdmb29kLWdyaWQtb3V0ZXInKTtcblxuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBcbiAgICBzZXBhcmF0b3JEaXYuYXBwZW5kQ2hpbGQobWVudUxhbmd1YWdlVGV4dCk7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChzZXBhcmF0b3JEaXYpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0IHN0b3JlTG9jYXRvciBmcm9tICcuL3N0b3JlTG9jYXRvci5qcyc7XG5pbXBvcnQgY2xlYXJCb2R5IGZyb20gJy4vbWFrZUJvZHkuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1lbnUoKSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9yZS1sb2NhdG9yLWFuY2hvcicpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjbGVhckJvZHkoKTtcbiAgICAgICAgICAgIHN0b3JlTG9jYXRvcigpO1xuICAgICAgICB9KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYW5jaG9yJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNsZWFyQm9keSgpO1xuICAgICAgICAgICAgbWVudSgpO1xuICAgICAgICB9KVxuXG4vLyAhISEhISEgVEhJUyBHT0VTIEJFRk9SRSBBTllUSElORyBFTFNFOlxuLy9Mb2FkIGluaXRpYWwgbGFuZGluZyBwYWdlLCBvdXIgTWVudVxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1lbnUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=