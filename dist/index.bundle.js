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
function clearBody

() {
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
/* harmony export */   "default": () => (/* binding */ pageLoad)
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
    
    menuNav.id = 'menu-anchor';

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_store_locator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-store-locator.css */ "./src/style-store-locator.css");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _storeLocator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeLocator.js */ "./src/storeLocator.js");
/* harmony import */ var _makeBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeBody */ "./src/makeBody.js");






window.addEventListener('DOMContentLoaded', (0,_page_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

document.querySelector('#store-locator-anchor')
        .addEventListener('click', function(){
            // clearBody();
            (0,_storeLocator_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        });

document.querySelector('#menu-anchor')
        .addEventListener('click',function(){
            // clearBody();
            (0,_page_load_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        })

// !!!!!! THIS GOES BEFORE ANYTHING ELSE:
//Load initial landing page, our Menu
// document.addEventListener('DOMContentLoaded', menu());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDYztBQUNHO0FBQ087QUFDVjs7QUFFbkMsNENBQTRDLHlEQUFROztBQUVwRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFZO0FBQ3hCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBUTtBQUNwQixTQUFTOztBQUVUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS1zdG9yZS1sb2NhdG9yLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLXN0b3JlLWxvY2F0b3IuY3NzP2Y1MmYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21ha2VCb2R5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3JlTG9jYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvb2wtbXVzdGFyZDogI2ViZTk4YztcXG4gICAgLS1jb29sLWJlaWdlOiAjZTZlMGM4O1xcbiAgICAtLWFsbW9zdC1iZWlnZTogI2Y1ZjBkYjtcXG4gICAgLS1zb2Z0LXJlZDogI2ZmYWZjYTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vcnl1emFraS5qcGcnKTsgKi9cXG59XFxuXFxuaW1nIHtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgbWluLXdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG5cXG59XFxuXFxuLmhlYWRlci1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLW11c3RhcmQpO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLyogLmhlYWRlci1iZyB7XFxufSAqL1xcblxcbi5zZXBhcmF0b3ItZGl2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uc21hbGwtaWNvbiB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XFxufVxcblxcbi8qIC5oZWFkZXItc2VjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59ICovXFxuXFxuXFxuLm1lbnUtbGFuZ3VhZ2UtdGV4dCB7XFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICBmb250LXNpemU6IDM3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLW11c3RhcmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tYWluLWhlYWRlciAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuXFxuLm1haW4tbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLm1haW4tbmF2IHVsIHtcXG4gICAgbWFyZ2luOiAxZW0gMCAwLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1uYXYgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcblxcbi5tYWluLW5hdiBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1haW4tbmF2IGE6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcblxcbn1cXG5cXG4ubWFpbi1uYXYgYTpsYXN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuXFxuLyogSSBLTk9XIEhPVyBXRSBDQU4gTUFLRSBJVCBMSU5FIFVQISEhXFxuICAgIEpVU1QgTUFLRSAuTUVOVS1DT05UQUlORVIgQkUgMyBDT0xVTU5TLFxcbiAgICBUSEVOIFNQQU4gVEhFIENPT0wtQkVJR0UgQUNST1NTIFRIT1NFIENPTFVNTlMsXFxuICAgIFxcbiAgICBUSEVOIENSRUFURSBBTk9USEVSIEdSSUQgSU5TSURFIENPTFVNTiAyLFxcbiAgICBBTkQgR0lWRSBJVCBUV08gQ09MVU1OUzogMUZSIEFORCAzRlIuXFxuXFxuICAgIFRIRU4gSU5TSURFIFRIRSBTRUNPTkQgQ09MVU1OLCBUSEUgT05FIFxcbiAgICBUSEFUIFRBS0VTIDNGUiwgUFVUIFRIRSBESVYgV0lUSCBUSEUgQUxNT1NULVdISVRFLFxcbiAgICBBTkQgVEhFIE9USEVSIENPTFVNTiBTVEFZUyBUSEUgU0FNRSBDT0xPVVIgQVMgT1VUU0lERSBUSElTXFxuICAgIFNFQ09ORCBHUklELCBXSElDSCBJUyBDT09MLUJFSUdFXFxuKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbW9zdC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxufVxcblxcbi5tZW51LWNlbnRlci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnN0b3Jlcy1ncmlkLWJnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZW51LXJpZ2h0IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ5cHggMWZyO1xcbn1cXG5cXG5cXG4uc2VsZWN0ZWQtbWVudS1sYW5nIHtcXG4gICAgaGVpZ2h0OiA0OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIHJnYigyNDIsIDI1NSwgMjA3KSAyMCUsIHJnYigyNTMsIDI0MiwgMjIxKSA1NCUsIHJnYmEoMjQ3LDIyNiwxODUsMSkgMTAwJSk7XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IGdhaW5zYm9ybztcXG59XFxuXFxuLmZvb2QtZ3JpZC1vdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyID4gaW1nIHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIFdFJ1JFIFRFU1RJTkcgSE9XIFdFJ1JFIEdPSU5HIFRPIEFQUExZIFRIRSBJTUFHRVNcXG5UTyBUSEUgRElTSCBESVZTLiBHWVVNRVNISSBXSVRIIENTUywgVEhFIFJFU1QgV0lUSCBKUyAqL1xcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1zdG9yZS1sb2NhdG9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0dBQ0c7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOzs7QUFHSDtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsb0lBQW9JO0lBQ3BJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTt1REFDdURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29vbC1tdXN0YXJkOiAjZWJlOThjO1xcbiAgICAtLWNvb2wtYmVpZ2U6ICNlNmUwYzg7XFxuICAgIC0tYWxtb3N0LWJlaWdlOiAjZjVmMGRiO1xcbiAgICAtLXNvZnQtcmVkOiAjZmZhZmNhO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9yeXV6YWtpLmpwZycpOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcblxcbn1cXG5cXG4uaGVhZGVyLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4vKiAuaGVhZGVyLWJnIHtcXG59ICovXFxuXFxuLnNlcGFyYXRvci1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5zbWFsbC1pY29uIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxuLyogLmhlYWRlci1zZWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn0gKi9cXG5cXG5cXG4ubWVudS1sYW5ndWFnZS10ZXh0IHtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtc2l6ZTogMzdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4taGVhZGVyIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwge1xcbiAgICBtYXJnaW46IDFlbSAwIDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLm1haW4tbmF2IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1uYXYgYTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuXFxufVxcblxcbi5tYWluLW5hdiBhOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiBJIEtOT1cgSE9XIFdFIENBTiBNQUtFIElUIExJTkUgVVAhISFcXG4gICAgSlVTVCBNQUtFIC5NRU5VLUNPTlRBSU5FUiBCRSAzIENPTFVNTlMsXFxuICAgIFRIRU4gU1BBTiBUSEUgQ09PTC1CRUlHRSBBQ1JPU1MgVEhPU0UgQ09MVU1OUyxcXG4gICAgXFxuICAgIFRIRU4gQ1JFQVRFIEFOT1RIRVIgR1JJRCBJTlNJREUgQ09MVU1OIDIsXFxuICAgIEFORCBHSVZFIElUIFRXTyBDT0xVTU5TOiAxRlIgQU5EIDNGUi5cXG5cXG4gICAgVEhFTiBJTlNJREUgVEhFIFNFQ09ORCBDT0xVTU4sIFRIRSBPTkUgXFxuICAgIFRIQVQgVEFLRVMgM0ZSLCBQVVQgVEhFIERJViBXSVRIIFRIRSBBTE1PU1QtV0hJVEUsXFxuICAgIEFORCBUSEUgT1RIRVIgQ09MVU1OIFNUQVlTIFRIRSBTQU1FIENPTE9VUiBBUyBPVVRTSURFIFRISVNcXG4gICAgU0VDT05EIEdSSUQsIFdISUNIIElTIENPT0wtQkVJR0VcXG4qL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxtb3N0LWJlaWdlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG59XFxuXFxuLm1lbnUtY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uc3RvcmVzLWdyaWQtYmcge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1lbnUtcmlnaHQge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDlweCAxZnI7XFxufVxcblxcblxcbi5zZWxlY3RlZC1tZW51LWxhbmcge1xcbiAgICBoZWlnaHQ6IDQ5cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNTUsIDI1NSwgMjU1KSAwJSwgcmdiKDI0MiwgMjU1LCAyMDcpIDIwJSwgcmdiKDI1MywgMjQyLCAyMjEpIDU0JSwgcmdiYSgyNDcsMjI2LDE4NSwxKSAxMDAlKTtcXG4gICAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB3aGl0ZXNtb2tlIDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA0cHggZ2FpbnNib3JvO1xcbn1cXG5cXG4uZm9vZC1ncmlkLW91dGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWcge1xcbiAgICBtYXJnaW46IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmZvb2QtZ3JpZC1pbm5lciA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2ZyB7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogMjBweDtcXG59XFxuXFxuLyogV0UnUkUgVEVTVElORyBIT1cgV0UnUkUgR09JTkcgVE8gQVBQTFkgVEhFIElNQUdFU1xcblRPIFRIRSBESVNIIERJVlMuIEdZVU1FU0hJIFdJVEggQ1NTLCBUSEUgUkVTVCBXSVRIIEpTICovXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29vbC1tdXN0YXJkOiAjZWJlOThjO1xcbiAgICAtLWNvb2wtYmVpZ2U6ICNlNmUwYzg7XFxuICAgIC0tYWxtb3N0LWJlaWdlOiAjZjVmMGRiO1xcbiAgICAtLXNvZnQtcmVkOiAjZmZhZmNhO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9yeXV6YWtpLmpwZycpOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcblxcbn1cXG5cXG4uaGVhZGVyLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4vKiAuaGVhZGVyLWJnIHtcXG59ICovXFxuXFxuLnNlcGFyYXRvci1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5zbWFsbC1pY29uIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxuLyogLmhlYWRlci1zZWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn0gKi9cXG5cXG5cXG4ubWVudS1sYW5ndWFnZS10ZXh0IHtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtc2l6ZTogMzdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4taGVhZGVyIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwge1xcbiAgICBtYXJnaW46IDFlbSAwIDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLm1haW4tbmF2IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1uYXYgYTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuXFxufVxcblxcbi5tYWluLW5hdiBhOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiBJIEtOT1cgSE9XIFdFIENBTiBNQUtFIElUIExJTkUgVVAhISFcXG4gICAgSlVTVCBNQUtFIC5NRU5VLUNPTlRBSU5FUiBCRSAzIENPTFVNTlMsXFxuICAgIFRIRU4gU1BBTiBUSEUgQ09PTC1CRUlHRSBBQ1JPU1MgVEhPU0UgQ09MVU1OUyxcXG4gICAgXFxuICAgIFRIRU4gQ1JFQVRFIEFOT1RIRVIgR1JJRCBJTlNJREUgQ09MVU1OIDIsXFxuICAgIEFORCBHSVZFIElUIFRXTyBDT0xVTU5TOiAxRlIgQU5EIDNGUi5cXG5cXG4gICAgVEhFTiBJTlNJREUgVEhFIFNFQ09ORCBDT0xVTU4sIFRIRSBPTkUgXFxuICAgIFRIQVQgVEFLRVMgM0ZSLCBQVVQgVEhFIERJViBXSVRIIFRIRSBBTE1PU1QtV0hJVEUsXFxuICAgIEFORCBUSEUgT1RIRVIgQ09MVU1OIFNUQVlTIFRIRSBTQU1FIENPTE9VUiBBUyBPVVRTSURFIFRISVNcXG4gICAgU0VDT05EIEdSSUQsIFdISUNIIElTIENPT0wtQkVJR0VcXG4qL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxtb3N0LWJlaWdlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG59XFxuXFxuLm1lbnUtY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4ubWVudS1ncmlkLWJnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLm1lbnUtcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ5cHggMWZyO1xcbn1cXG5cXG4ubWVudS1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXgtd2lkdGg6IDE4OXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3N3B4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1sZWZ0ID4gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoNzAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtbWVudS1sYW5nIHtcXG4gICAgaGVpZ2h0OiA0OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIHJnYigyNDIsIDI1NSwgMjA3KSAyMCUsIHJnYigyNTMsIDI0MiwgMjIxKSA1NCUsIHJnYmEoMjQ3LDIyNiwxODUsMSkgMTAwJSk7XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IGdhaW5zYm9ybztcXG59XFxuXFxuLmZvb2QtZ3JpZC1vdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyID4gaW1nIHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIFdFJ1JFIFRFU1RJTkcgSE9XIFdFJ1JFIEdPSU5HIFRPIEFQUExZIFRIRSBJTUFHRVNcXG5UTyBUSEUgRElTSCBESVZTLiBHWVVNRVNISSBXSVRIIENTUywgVEhFIFJFU1QgV0lUSCBKUyAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0NBQWtDOztBQUV0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHOztBQUVIO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOzs7Ozs7R0FNRzs7O0FBR0g7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7Ozs7Ozs7Ozs7O0NBV0M7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsb0lBQW9JO0lBQ3BJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTt1REFDdURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIC0tY29vbC1tdXN0YXJkOiAjZWJlOThjO1xcbiAgICAtLWNvb2wtYmVpZ2U6ICNlNmUwYzg7XFxuICAgIC0tYWxtb3N0LWJlaWdlOiAjZjVmMGRiO1xcbiAgICAtLXNvZnQtcmVkOiAjZmZhZmNhO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi9yeXV6YWtpLmpwZycpOyAqL1xcbn1cXG5cXG5pbWcge1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb29sLWJlaWdlKTtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcblxcbn1cXG5cXG4uaGVhZGVyLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4vKiAuaGVhZGVyLWJnIHtcXG59ICovXFxuXFxuLnNlcGFyYXRvci1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5zbWFsbC1pY29uIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxuLyogLmhlYWRlci1zZWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn0gKi9cXG5cXG5cXG4ubWVudS1sYW5ndWFnZS10ZXh0IHtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtc2l6ZTogMzdweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvb2wtbXVzdGFyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4taGVhZGVyIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWFpbi1uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ubWFpbi1uYXYgdWwge1xcbiAgICBtYXJnaW46IDFlbSAwIDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuLm1haW4tbmF2IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1uYXYgYTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuXFxufVxcblxcbi5tYWluLW5hdiBhOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5cXG4vKiBJIEtOT1cgSE9XIFdFIENBTiBNQUtFIElUIExJTkUgVVAhISFcXG4gICAgSlVTVCBNQUtFIC5NRU5VLUNPTlRBSU5FUiBCRSAzIENPTFVNTlMsXFxuICAgIFRIRU4gU1BBTiBUSEUgQ09PTC1CRUlHRSBBQ1JPU1MgVEhPU0UgQ09MVU1OUyxcXG4gICAgXFxuICAgIFRIRU4gQ1JFQVRFIEFOT1RIRVIgR1JJRCBJTlNJREUgQ09MVU1OIDIsXFxuICAgIEFORCBHSVZFIElUIFRXTyBDT0xVTU5TOiAxRlIgQU5EIDNGUi5cXG5cXG4gICAgVEhFTiBJTlNJREUgVEhFIFNFQ09ORCBDT0xVTU4sIFRIRSBPTkUgXFxuICAgIFRIQVQgVEFLRVMgM0ZSLCBQVVQgVEhFIERJViBXSVRIIFRIRSBBTE1PU1QtV0hJVEUsXFxuICAgIEFORCBUSEUgT1RIRVIgQ09MVU1OIFNUQVlTIFRIRSBTQU1FIENPTE9VUiBBUyBPVVRTSURFIFRISVNcXG4gICAgU0VDT05EIEdSSUQsIFdISUNIIElTIENPT0wtQkVJR0VcXG4qL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxtb3N0LWJlaWdlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG59XFxuXFxuLm1lbnUtY2VudGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4ubWVudS1ncmlkLWJnIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLm1lbnUtcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ5cHggMWZyO1xcbn1cXG5cXG4ubWVudS1sZWZ0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XFxufVxcblxcbi5tZW51LWxlZnQgPiBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBtYXgtd2lkdGg6IDE4OXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3N3B4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1sZWZ0ID4gaW1nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xcbiAgICBmaWx0ZXI6IG9wYWNpdHkoNzAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtbWVudS1sYW5nIHtcXG4gICAgaGVpZ2h0OiA0OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIHJnYigyNDIsIDI1NSwgMjA3KSAyMCUsIHJnYigyNTMsIDI0MiwgMjIxKSA1NCUsIHJnYmEoMjQ3LDIyNiwxODUsMSkgMTAwJSk7XFxuICAgIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGVzbW9rZSAzcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IGdhaW5zYm9ybztcXG59XFxuXFxuLmZvb2QtZ3JpZC1vdXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29vbC1iZWlnZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbn1cXG5cXG4uZm9vZC1ncmlkLWlubmVyID4gaW1nIHtcXG4gICAgbWFyZ2luOiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5mb29kLWdyaWQtaW5uZXIgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdmcge1xcbiAgICBtYXgtd2lkdGg6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIFdFJ1JFIFRFU1RJTkcgSE9XIFdFJ1JFIEdPSU5HIFRPIEFQUExZIFRIRSBJTUFHRVNcXG5UTyBUSEUgRElTSCBESVZTLiBHWVVNRVNISSBXSVRIIENTUywgVEhFIFJFU1QgV0lUSCBKUyAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtc3RvcmUtbG9jYXRvci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXN0b3JlLWxvY2F0b3IuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQm9keVxuXG4oKSB7XG4gICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFJhbWVuIGZyb20gJy4vcmFtZW4taWNvbi5wbmcnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9tYXRzdXlhLWxvZ28uZ2lmJztcbmltcG9ydCBHeXVtZXNoaSBmcm9tICcuL2ltZy9tZW51LWVuZy9neXVtZXNoaS5qcGcnO1xuaW1wb3J0IEN1cnJ5IGZyb20gJy4vaW1nL21lbnUtZW5nL2N1cnJ5LnBuZyc7XG5pbXBvcnQgQm93bCBmcm9tICcuL2ltZy9tZW51LWVuZy9ib3dsLnBuZyc7XG5pbXBvcnQgU2V0TWVhbHMgZnJvbSAnLi9pbWcvbWVudS1lbmcvc2V0LW1lYWxzLnBuZyc7XG5pbXBvcnQgTW9ybmluZ01lYWxzIGZyb20gJy4vaW1nL21lbnUtZW5nL21vcm5pbmctbWVhbHMucG5nJztcbmltcG9ydCBTaWRlRGlzaGVzIGZyb20gJy4vaW1nL21lbnUtZW5nL3NpZGUtZGlzaGVzLnBuZyc7XG5pbXBvcnQgVG9wcGluZ3MgZnJvbSAnLi9pbWcvbWVudS1lbmcvdG9wcGluZ3MucG5nJztcbmltcG9ydCBEcmlua3MgZnJvbSAnLi9pbWcvbWVudS1lbmcvZHJpbmtzLnBuZyc7XG5cbmltcG9ydCBFbmdNZW51IGZyb20gJy4vaW1nL21lbnUtc2VsZWN0L2VuLmpwZyc7XG5pbXBvcnQgS29yTWVudSBmcm9tICcuL2ltZy9tZW51LXNlbGVjdC9rb3IuanBnJztcblxuXG5cbi8vIFdFIE1BWSBWRVJZIFdFTEwgV0lTSCBUTyBTRVBBUkFURSBUSElTIElOVE8gXG4vLyBTRVZFUkFMIFNNQUxMRVIgRlVOQ1RJT05TLCBFQUNIIEFQUEVORElORyBTT01FVEhJTkdcbi8vIFRPIE9VUiBCQUNLR1JPVU5ELiBUSEVOLCBSVU4gQUxMIFRIRSBGVU5DVElPTlMgSU4gSU5ERVguSlNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgLy8gYWxlcnQoJ1RFU1QnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL05hdmlnYXRpb24gYmFyLCBvciBjb250YWluZXJcbiAgICAvLyBjb25zdCBoZWFkZXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1iYXInKTtcblxuICAgIC8vdGhlIG1hdHN1eWEgbG9nb1xuICAgIGNvbnN0IG1hdHN1eWFMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbWF0c3V5YUxvZ28uc3JjID0gTG9nbzsgXG4gICAgbWF0c3V5YUxvZ28uY2xhc3NMaXN0LmFkZCgnc21hbGwtaWNvbicpXG5cblxuICAgIC8vbWFpbiBoZWFkZXJcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgbWFpbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcicpO1xuXG4gICAgLy9jb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hdHN1eWFMb2dvKTtcblxuICAgIC8vbmF2aWdhdGlvbiBiYXJcbiAgICBjb25zdCBtYWluTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdicpO1xuICAgIFxuICAgIGNvbnN0IHVsTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bE5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdi1saXN0Jyk7XG4gICAgXG4gICAgY29uc3QgbGlOYXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWVudU5hdi5pbm5lckhUTUwgPSAnTWVudSc7XG5cbiAgICBsaU5hdk9uZS5hcHBlbmRDaGlsZChtZW51TmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdk9uZSk7XG4gICAgXG4gICAgbWVudU5hdi5pZCA9ICdtZW51LWFuY2hvcic7XG5cbiAgICBjb25zdCBsaU5hdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc2hvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIHNob3BOYXYuaWQgPSAnc3RvcmUtbG9jYXRvci1hbmNob3InO1xuICAgIHNob3BOYXYuaW5uZXJIVE1MID0gJ1N0b3JlIGxvY2F0b3InO1xuXG4gICAgbGlOYXZUd28uYXBwZW5kQ2hpbGQoc2hvcE5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZUd28pO1xuXG4gICAgXG4gICAgY29uc3QgbGlOYXZUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY29tcGFueU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb21wYW55TmF2LmlubmVySFRNTCA9ICdPdXIgY29tcGFueSc7XG4gICAgbGlOYXZUaHJlZS5hcHBlbmRDaGlsZChjb21wYW55TmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdlRocmVlKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGludmVzdG9yTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGludmVzdG9yTmF2LmlubmVySFRNTCA9ICdJbnZlc3RvciBpbmZvcm1hdGlvbic7XG4gICAgbGlOYXZGb3VyLmFwcGVuZENoaWxkKGludmVzdG9yTmF2KTtcbiAgICB1bE5hdi5hcHBlbmRDaGlsZChsaU5hdkZvdXIpO1xuXG4gICAgLy8gY29uc3QgbGlOYXZGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBjb25zdCBmdXR1cmVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgLy8gZnV0dXJlTmF2LmlubmVySFRNTCA9ICdGdXR1cmUgZGV2ZWxvcG1lbnQnO1xuICAgIC8vIGxpTmF2Rml2ZS5hcHBlbmRDaGlsZChmdXR1cmVOYXYpO1xuICAgIC8vIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2Rml2ZSk7XG4gICAgXG4gICAgbWFpbk5hdi5hcHBlbmRDaGlsZCh1bE5hdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5OYXYpO1xuXG4gICAgLy8gY29uc3QgY29udGFpbmVyU2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb250YWluZXJTZWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItc2VjdGlvbnMnKTtcbiAgICAvLyBjb25zdCBjb250YWluZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnRhaW5lck1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIC8vIGNvbnRhaW5lclNlY3Rpb25zLmFwcGVuZENoaWxkKGNvbnRhaW5lck1lbnUpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lclN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnRhaW5lclN0b3JlLmlubmVySFRNTCA9ICdTdG9yZSBMb2NhdG9yJztcbiAgICAvLyBjb250YWluZXJTZWN0aW9ucy5hcHBlbmRDaGlsZChjb250YWluZXJTdG9yZSk7XG4gICBcbiAgIFxuICAgIC8vIGNvbnN0IGNvbnRhaW5lckNvbXBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gY29uc3QgY29udGFpbmVySW52ZXN0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGNvbnN0IGNvbnRhaW5lckZ1dHVyZURldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIC8vRW5nbGlzaCBtZW51IHNlcGFyYXRvclxuICAgIGNvbnN0IHNlcGFyYXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvckRpdi5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3ItZGl2Jyk7XG4gICAgY29uc3QgcmFtZW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgcmFtZW5JY29uLnNyYyA9IFJhbWVuO1xuICAgIHJhbWVuSWNvbi5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJyk7XG4gICAgY29uc3QgbWVudUxhbmd1YWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmlubmVySFRNTCA9ICdFbmdsaXNoIE1lbnUnO1xuICAgIG1lbnVMYW5ndWFnZVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS1sYW5ndWFnZS10ZXh0Jyk7XG5cbiAgICAvLyAvL01lbnUgZGl2c1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgY29uc3QgbWVudUxhbmd1YWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVDZW50ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q2VudGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2VudGVyLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q3VycmVudExhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51R3JpZEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQtYmcnKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICAgIGNvbnN0IG1lbnVSaWdodEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoJ21lbnUtcmlnaHQnKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVSaWdodEhhbGYpO1xuXG4gICAgY29uc3QgbWVudUxlZnR0SGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVMZWZ0dEhhbGYuY2xhc3NMaXN0LmFkZCgnbWVudS1sZWZ0Jyk7XG4gICAgY29uc3QgZW5nbGlzaE1lbnUgPSBuZXcgSW1hZ2UoKTtcbiAgICBlbmdsaXNoTWVudS5zcmMgPSBFbmdNZW51O1xuXG4gICAgY29uc3Qga29yZWFuTWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIGtvcmVhbk1lbnUuc3JjID0gS29yTWVudTtcbiAgICBcbiAgICBjb25zdCBzcGFuaXNoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbWVudUxlZnR0SGFsZi5hcHBlbmRDaGlsZChlbmdsaXNoTWVudSk7XG4gICAgbWVudUxlZnR0SGFsZi5hcHBlbmRDaGlsZChrb3JlYW5NZW51KTtcbiAgICBtZW51TGVmdHRIYWxmLmFwcGVuZENoaWxkKHNwYW5pc2hNZW51KTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVMZWZ0dEhhbGYpO1xuXG4gICAgLy9TZWxlY3RlZCBtZW51IGxhbmd1YWdlIFxuICAgIGNvbnN0IHNlbGVjdGVkTWVudUxhbmd1YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtbWVudS1sYW5nJyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuaW5uZXJIVE1MID0gJ0VuZ2xpc2ggTWVudSc7XG4gICAgbWVudVJpZ2h0SGFsZi5hcHBlbmRDaGlsZChzZWxlY3RlZE1lbnVMYW5ndWFnZSk7ICBcbiAgICBcbiAgICAvL0ZPT0QgR1JJRCEgXG4gICAgY29uc3QgZm9vZEdyaWRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RHcmlkSW5uZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkLWlubmVyJyk7XG5cbiAgICBjb25zdCBmb29kR3JpZE91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZEdyaWRPdXRlci5jbGFzc0xpc3QuYWRkKCdmb29kLWdyaWQtb3V0ZXInKTtcblxuICAgIGNvbnN0IGd5dW1lc2hpID0gbmV3IEltYWdlKCk7XG4gICAgZ3l1bWVzaGkuc3JjID0gR3l1bWVzaGk7XG4gICAgXG4gICAgLy9UUllJTkcgT1VUIFNFQ09ORCBJTUcgTUVUSE9EXG4gICAgY29uc3QgY3VycnkgPSBuZXcgSW1hZ2UoKTtcbiAgICBjdXJyeS5zcmMgPSBDdXJyeTtcblxuICAgIC8vVEhJUyBTRUNPTkQgV0FZIExPT0tTIEEgTE9UIEJFVFRFUiFcblxuXG4gICAgY29uc3QgYm93bCA9IG5ldyBJbWFnZSgpO1xuICAgIGJvd2wuc3JjID0gQm93bDtcbiAgICBjb25zdCBzZXRNZWFsID0gbmV3IEltYWdlKCk7XG4gICAgc2V0TWVhbC5zcmMgPSBTZXRNZWFscztcbiAgICBjb25zdCBtb3JuaW5nTWVhbCA9IG5ldyBJbWFnZSgpO1xuICAgIG1vcm5pbmdNZWFsLnNyYyA9IE1vcm5pbmdNZWFscztcblxuICAgIGNvbnN0IHNpZGVEaXNoZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBzaWRlRGlzaGVzLnNyYyA9IFNpZGVEaXNoZXM7XG4gICAgY29uc3QgdG9wcGluZ3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b3BwaW5ncy5zcmMgPSBUb3BwaW5ncztcblxuICAgIGNvbnN0IGRyaW5rcyA9IG5ldyBJbWFnZSgpO1xuICAgIGRyaW5rcy5zcmMgPSBEcmlua3M7XG5cbiAgICAvLyBBUFBFTkQgRElTSEVTIFRPIEZPT0RHUklEIVxuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoZ3l1bWVzaGkpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoY3VycnkpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoYm93bCk7XG4gICAgZm9vZEdyaWRJbm5lci5hcHBlbmRDaGlsZChzZXRNZWFsKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKG1vcm5pbmdNZWFsKTtcbiAgICBmb29kR3JpZElubmVyLmFwcGVuZENoaWxkKHNpZGVEaXNoZXMpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQodG9wcGluZ3MpO1xuICAgIGZvb2RHcmlkSW5uZXIuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcbiAgICBmb29kR3JpZE91dGVyLmFwcGVuZENoaWxkKGZvb2RHcmlkSW5uZXIpO1xuICAgIG1lbnVSaWdodEhhbGYuYXBwZW5kQ2hpbGQoZm9vZEdyaWRPdXRlcik7XG5cbiAgICAvL2FkZCBpbWFnZXMgdG8gZGlzaCBkaXZzIVxuXG4gICAgLy8gTGV0J3MgY29tcGFyZSB0d28gd2F5cyBvZiBkb2luZyB0aGlzOlxuXG4gICAgLy9XZSBoYXZlIHBsYWNlZCB0aGUgMXN0IGRpc2ggYXMgYSBiZyBpbWcgb24gdGhlIENTUy5cbiAgICAvL1dlIGNhbiBhbHNvIGp1c3Qgc3dpdGNoIHRoZSBjcmVhdGVFbGVtZW50KCdkaXYnKSdzIGZvclxuICAgIC8vY3JlYXRlRWxlbWVudCgnaW1nJykgYW5kIHNlZSB3aGF0IGhhcHBlbnMgXG5cblxuICAgIC8vIGNvbnN0IGd5dW1lc2hpUGljID0gbmV3IEltYWdlKCk7XG4gICAgLy8gZ3l1bWVzaGkuc3JjID0gR3l1bWVzaGk7XG4gICAgXG5cblxuXG5cbiAgICAvL2NsYXNzIGxpc3RzXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyBtYWluLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgLy8gY29udGFpbmVyLmFwcGVuZChjb250YWluZXJTZWN0aW9ucyk7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKHJhbWVuSWNvbik7XG4gICAgc2VwYXJhdG9yRGl2LmFwcGVuZENoaWxkKG1lbnVMYW5ndWFnZVRleHQpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yRGl2KTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50O1xufSAiLCJpbXBvcnQgJy4vc3R5bGUtc3RvcmUtbG9jYXRvci5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9tYXRzdXlhLWxvZ28uZ2lmJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmVMb2NhdG9yKCkge1xuXG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy90aGUgbWF0c3V5YSBsb2dvXG4gICAgY29uc3QgbWF0c3V5YUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXRzdXlhTG9nby5zcmMgPSBMb2dvOyBcbiAgICBtYXRzdXlhTG9nby5jbGFzc0xpc3QuYWRkKCdzbWFsbC1pY29uJylcblxuXG4gICAgLy9tYWluIGhlYWRlclxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJyk7XG5cbiAgICAvL2NvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWF0c3V5YUxvZ28pO1xuXG4gICAgLy9uYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgdWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsTmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2LWxpc3QnKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1lbnVOYXYuaWQgPSAnbWVudS1hbmNob3InO1xuXG4gICAgbWVudU5hdi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgXG5cblxuICAgIGxpTmF2T25lLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2T25lKTtcbiAgICBcbiAgICBjb25zdCBsaU5hdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc2hvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpY29uTmF2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIHNob3BOYXYuaW5uZXJIVE1MID0gJ1N0b3JlIGxvY2F0b3InO1xuICAgIGxpTmF2VHdvLmFwcGVuZENoaWxkKHNob3BOYXYpO1xuICAgIHVsTmF2LmFwcGVuZENoaWxkKGxpTmF2VHdvKTtcblxuICAgIFxuICAgIGNvbnN0IGxpTmF2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbXBhbnlOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29tcGFueU5hdi5pbm5lckhUTUwgPSAnT3VyIGNvbXBhbnknO1xuICAgIGxpTmF2VGhyZWUuYXBwZW5kQ2hpbGQoY29tcGFueU5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZUaHJlZSk7XG4gICAgXG4gICAgY29uc3QgbGlOYXZGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBpbnZlc3Rvck5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbnZlc3Rvck5hdi5pbm5lckhUTUwgPSAnSW52ZXN0b3IgaW5mb3JtYXRpb24nO1xuICAgIGxpTmF2Rm91ci5hcHBlbmRDaGlsZChpbnZlc3Rvck5hdik7XG4gICAgdWxOYXYuYXBwZW5kQ2hpbGQobGlOYXZGb3VyKTtcblxuICAgIFxuICAgIG1haW5OYXYuYXBwZW5kQ2hpbGQodWxOYXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTmF2KTtcblxuICAgIC8vRW5nbGlzaCBtZW51IHNlcGFyYXRvclxuICAgIGNvbnN0IHNlcGFyYXRvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvckRpdi5jbGFzc0xpc3QuYWRkKCdzZXBhcmF0b3ItZGl2Jyk7XG4gICAgY29uc3QgbWVudUxhbmd1YWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TGFuZ3VhZ2VUZXh0LmlubmVySFRNTCA9ICdTdG9yZSBsb2NhdGlvbnMnO1xuICAgIG1lbnVMYW5ndWFnZVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS1sYW5ndWFnZS10ZXh0Jyk7XG5cbiAgICAvLyAvL01lbnUgZGl2c1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgY29uc3QgbWVudUNlbnRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDZW50ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jZW50ZXItY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3Qgc3RvcmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgc3RvcmVzRGl2LmNsYXNzTGlzdC5hZGQoJ3N0b3Jlcy1ncmlkLWJnJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yZXNEaXYpO1xuICAgIGNvbnN0IG1lbnVSaWdodEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UmlnaHRIYWxmLmNsYXNzTGlzdC5hZGQoJ21lbnUtcmlnaHQnKTtcblxuXG4gICAgLy9TZWxlY3RlZCBtZW51IGxhbmd1YWdlIFxuICAgIGNvbnN0IHNlbGVjdGVkTWVudUxhbmd1YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtbWVudS1sYW5nJyk7XG4gICAgc2VsZWN0ZWRNZW51TGFuZ3VhZ2UuaW5uZXJIVE1MID0gJ0VuZ2xpc2ggTWVudSc7XG4gICAgbWVudVJpZ2h0SGFsZi5hcHBlbmRDaGlsZChzZWxlY3RlZE1lbnVMYW5ndWFnZSk7ICBcbiAgICBcbiAgICAvL0ZPT0QgR1JJRCEgXG4gICAgY29uc3QgZm9vZEdyaWRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RHcmlkSW5uZXIuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkLWlubmVyJyk7XG5cbiAgICBjb25zdCBmb29kR3JpZE91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZEdyaWRPdXRlci5jbGFzc0xpc3QuYWRkKCdmb29kLWdyaWQtb3V0ZXInKTtcblxuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBcbiAgICBzZXBhcmF0b3JEaXYuYXBwZW5kQ2hpbGQobWVudUxhbmd1YWdlVGV4dCk7XG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChzZXBhcmF0b3JEaXYpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUtc3RvcmUtbG9jYXRvci5jc3MnO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmltcG9ydCBzdG9yZUxvY2F0b3IgZnJvbSAnLi9zdG9yZUxvY2F0b3IuanMnO1xuaW1wb3J0IGNsZWFyQm9keSBmcm9tICcuL21ha2VCb2R5Jztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBwYWdlTG9hZCgpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3JlLWxvY2F0b3ItYW5jaG9yJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGNsZWFyQm9keSgpO1xuICAgICAgICAgICAgc3RvcmVMb2NhdG9yKCk7XG4gICAgICAgIH0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1hbmNob3InKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBjbGVhckJvZHkoKTtcbiAgICAgICAgICAgIHBhZ2VMb2FkKCk7XG4gICAgICAgIH0pXG5cbi8vICEhISEhISBUSElTIEdPRVMgQkVGT1JFIEFOWVRISU5HIEVMU0U6XG4vL0xvYWQgaW5pdGlhbCBsYW5kaW5nIHBhZ2UsIG91ciBNZW51XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWVudSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==