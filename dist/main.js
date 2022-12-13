/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family:\r\n    'Trebuchet MS',\r\n    'Lucida Sans Unicode',\r\n    'Lucida Grande',\r\n    'Lucida Sans',\r\n    Arial,\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  flex: 1;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: grab;\r\n  color: #ccc;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .navbar {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #todo-section {\r\n    width: 100%;\r\n    margin: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  footer {\r\n    color: #4a1e9e;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB;;;;;;cAMY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;EAChD,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8CAA8C;EAC9C,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,2BAA2B;EAC3B,8BAA8B;EAC9B,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,2EAA2E;AAC7E;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yCAAyC;EACzC,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #bb98ff;\r\n  font-family:\r\n    'Trebuchet MS',\r\n    'Lucida Sans Unicode',\r\n    'Lucida Grande',\r\n    'Lucida Sans',\r\n    Arial,\r\n    sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-family: Geneva, Tahoma, sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n  color: #ddcbff;\r\n}\r\n\r\nbutton {\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nmain {\r\n  min-height: 70vh;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: white;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.navbar {\r\n  background-color: #fff;\r\n  margin-bottom: 3rem;\r\n  padding: 0.25rem 0.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.brand {\r\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 1.5rem;\r\n  color: #8a2be2;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.time-block {\r\n  display: flex;\r\n  align-items: center;\r\n  font-family: 'Courier New', Courier, monospace;\r\n  font-size: 0.9rem;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n}\r\n\r\n#clock {\r\n  border: solid 3px #8a2be2;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#date {\r\n  padding: 0.5rem;\r\n  border: solid 3px #8a2be2;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  background-color: #8a2be2;\r\n  color: #fff;\r\n}\r\n\r\n#todo-section {\r\n  background-color: #fff;\r\n  width: 60%;\r\n  margin: auto;\r\n  border-radius: 0.25rem;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #8a2be2;\r\n  padding: 1rem;\r\n}\r\n\r\n#refresh-btn {\r\n  color: #8a2be2;\r\n  font-size: 1.2rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#refresh-btn:hover {\r\n  transform: scale(1.4) rotateZ(90deg);\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#new-task-input {\r\n  padding: 0.5rem 0.75rem;\r\n  flex: 1;\r\n}\r\n\r\n.msg-box {\r\n  font-style: italic;\r\n  font-size: 0.8rem;\r\n  color: #747474;\r\n  padding: 0.5rem;\r\n  display: none;\r\n}\r\n\r\n.key-tag {\r\n  border: solid 1px #747474;\r\n  border-radius: 3px;\r\n  text-transform: uppercase;\r\n  font-style: normal;\r\n}\r\n\r\n.input-container:focus-within .msg-box {\r\n  display: block;\r\n}\r\n\r\n#todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#todo-container li {\r\n  display: flex;\r\n  gap: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-top: solid 1px #333;\r\n}\r\n\r\n.task-input {\r\n  flex: 1;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#todo-container button {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.remove-btn {\r\n  display: none;\r\n  color: crimson;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.drag-btn {\r\n  cursor: grab;\r\n  color: #ccc;\r\n}\r\n\r\n.remove-btn:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n#todo-container li:focus-within {\r\n  background-color: #ddcbff;\r\n}\r\n\r\n#todo-container li:focus-within .remove-btn {\r\n  display: block;\r\n}\r\n\r\n#todo-container li:focus-within .drag-btn {\r\n  display: none;\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  border-top: solid 1px #747474;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n  color: #4a1e9e;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n}\r\n\r\n#clear-btn:hover {\r\n  box-shadow: inset 0 -5em 0 0 #4a1e9e;\r\n  color: #fff;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    background-color: #fff;\r\n  }\r\n\r\n  .navbar {\r\n    flex-direction: column;\r\n  }\r\n\r\n  #todo-section {\r\n    width: 100%;\r\n    margin: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  footer {\r\n    color: #4a1e9e;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/reorder-list.js":
/*!*****************************!*\
  !*** ./src/reorder-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reorderTodoList = (todoList, fromIndex, toIndex) => {
  const moveUp = fromIndex - toIndex > 0;
  if (moveUp) {
    for (let i = toIndex; i < fromIndex; i += 1) {
      todoList[i].index = todoList[i + 1].index;
    }
    todoList[fromIndex].index = toIndex;
  } else {
    for (let i = toIndex; i > fromIndex; i -= 1) {
      todoList[i].index = todoList[i - 1].index;
    }
    todoList[fromIndex].index = toIndex;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reorderTodoList);


/***/ }),

/***/ "./src/task-manager.js":
/*!*****************************!*\
  !*** ./src/task-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


const addNewTask = ({ task, list }) => {
  const index = list.length;
  const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ task, index });
  list.push(todo);
};

const deleteTask = ({ index, list }) => {
  for (let i = index + 1; i < list.length; i += 1) {
    list[i].index -= 1;
  }
  list.splice(index, 1);
};

const updateTask = ({ task, index, list }) => {
  list[index].task = task;
};


/***/ }),

/***/ "./src/todo-maker.js":
/*!***************************!*\
  !*** ./src/todo-maker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-status.js */ "./src/update-status.js");
/* harmony import */ var _task_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-manager.js */ "./src/task-manager.js");



const TRASH_ICON = '<i class="fa-solid fa-trash"></i>';
const DRAG_ICON = '<i class="fa-solid fa-grip-vertical"></i>';

const makeElement = (tag, className, todoIndex) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.dataset.index = todoIndex;
  return elem;
};

const makeTodoItem = (todo, todoList) => {
  // Creating elements for each todo
  const li = makeElement('li', 'todo-item', todo.index);
  const checkBox = makeElement('input', 'todo-check', todo.index);
  const taskInput = makeElement('input', 'task-input', todo.index);
  const removeBtn = makeElement('button', 'remove-btn', todo.index);
  const dragBtn = makeElement('button', 'drag-btn', todo.index);

  checkBox.type = 'checkbox';
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', (e) => {
    (0,_update_status_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      index: parseInt(e.target.dataset.index, 10),
      completed: e.target.checked,
      list: todoList,
    });
  });
  taskInput.value = todo.task;
  if (todo.completed) taskInput.style.textDecoration = 'line-through';
  taskInput.addEventListener('change', (e) => {
    const task = e.target.value.trim();
    if (task.length === 0) return;
    (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.updateTask)({
      task: e.target.value,
      index: e.target.dataset.index,
      list: todoList,
    });
  });
  removeBtn.innerHTML = TRASH_ICON;
  dragBtn.innerHTML = DRAG_ICON;
  dragBtn.addEventListener('mousedown', () => {
    li.draggable = true;
  });
  li.appendChild(checkBox);
  li.appendChild(taskInput);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeTodoItem);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor({ task, index, completed = false }) {
    this.task = task;
    this.completed = completed;
    this.index = index;
  }
}


/***/ }),

/***/ "./src/update-status.js":
/*!******************************!*\
  !*** ./src/update-status.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateTodoStatus = ({ index, completed, list }) => {
  if (index >= list.length) return;
  list[index].completed = completed;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTodoStatus);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _task_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-manager.js */ "./src/task-manager.js");
/* harmony import */ var _todo_maker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-maker.js */ "./src/todo-maker.js");
/* harmony import */ var _reorder_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reorder-list.js */ "./src/reorder-list.js");





const todoContainer = document.querySelector('#todo-container');
const newTaskInput = document.querySelector('#new-task-input');
const clearBtn = document.querySelector('#clear-btn');
const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const LOCAL_KEY = 'microtasks-data';

let dragItem;
let dropOn;

const getLocalData = () => {
  let todoList = [];
  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    todoList = JSON.parse(localData);
  }
  return todoList;
};

const updateTodoList = (todoList) => {
  // update display and storage
  todoContainer.textContent = '';
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((todo) => {
    const item = (0,_todo_maker_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo, todoList);
    todoContainer.appendChild(item);
  });
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
};

/* -------Main Program-----------*/
const todoList = getLocalData();
updateTodoList(todoList);

document.addEventListener('click', (e) => {
  // handling remove buttons
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn === null) return;
  const idToRemove = parseInt(removeBtn.dataset.index, 10);
  if (idToRemove >= todoList.length) return;
  (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({ index: idToRemove, list: todoList });
  updateTodoList(todoList);
});

document.addEventListener('keyup', (e) => {
  // adding new task on Enter
  if (e.key === 'Enter') {
    const newTask = newTaskInput.value.trim();
    newTaskInput.value = '';
    if (newTask.length === 0) return;
    (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)({ task: newTask, list: todoList });
    updateTodoList(todoList);
  }
});

document.addEventListener('change', () => updateTodoList(todoList));

clearBtn.addEventListener('click', () => {
  const completedItems = todoList.filter((item) => item.completed);
  completedItems.forEach((todo) =>
    (0,_task_manager_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({ index: todo.index, list: todoList })
  );
  updateTodoList(todoList);
});

date.textContent = new Date().toLocaleDateString('en-US');
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString('en-US');
}, 1000);

// * Drag and Drop Feature

document.addEventListener('dragstart', (e) => {
  dragItem = e.target.closest('.todo-item');
});

todoContainer.addEventListener('dragover', (e) => e.preventDefault());

document.addEventListener('dragenter', (e) => {
  dropOn = e.target.closest('.todo-item');
});

document.addEventListener('dragend', () => {
  if (dragItem === null) return;
  dragItem.draggable = false;
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  if (dragItem === null || dropOn === null) return;
  (0,_reorder_list_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    todoList,
    parseInt(dragItem.dataset.index, 10),
    parseInt(dropOn.dataset.index, 10)
  );
  updateTodoList(todoList);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVk7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBVSxHQUFHLG1DQUFtQztBQUNsRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVSxHQUFHLCtCQUErQjtBQUNoRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVLEdBQUcsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcmVvcmRlci1saXN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Rhc2stbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLW1ha2VyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdXBkYXRlLXN0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiOThmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICAnVHJlYnVjaGV0IE1TJyxcXHJcXG4gICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxcclxcbiAgICAnTHVjaWRhIEdyYW5kZScsXFxyXFxuICAgICdMdWNpZGEgU2FucycsXFxyXFxuICAgIEFyaWFsLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICNkZGNiZmY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5icmFuZCB7XFxyXFxuICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiAjOGEyYmUyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtYmxvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICM0YTFlOWU7XFxyXFxufVxcclxcblxcclxcbiNjbG9jayB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNkYXRlIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4ICM4YTJiZTI7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGEyYmUyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDAgMTlweCAzOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDAgMTVweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjOGEyYmUyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnRuIHtcXHJcXG4gIGNvbG9yOiAjOGEyYmUyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KSByb3RhdGVaKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2staW5wdXQge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubXNnLWJveCB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiAjNzQ3NDc0O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS10YWcge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzc0NzQ3NDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXI6Zm9jdXMtd2l0aGluIC5tc2ctYm94IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5wdXQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgY29sb3I6IGNyaW1zb247XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWctYnRuIHtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaTpmb2N1cy13aXRoaW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2JmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiAucmVtb3ZlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiAuZHJhZy1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjNzQ3NDc0O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogIzRhMWU5ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTVlbSAwIDAgIzRhMWU5ZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kby1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGNvbG9yOiAjNGExZTllO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekI7Ozs7OztjQU1ZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiOThmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICAnVHJlYnVjaGV0IE1TJyxcXHJcXG4gICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLFxcclxcbiAgICAnTHVjaWRhIEdyYW5kZScsXFxyXFxuICAgICdMdWNpZGEgU2FucycsXFxyXFxuICAgIEFyaWFsLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICNkZGNiZmY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5icmFuZCB7XFxyXFxuICBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiAjOGEyYmUyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtYmxvY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICM0YTFlOWU7XFxyXFxufVxcclxcblxcclxcbiNjbG9jayB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjOGEyYmUyO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNkYXRlIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4ICM4YTJiZTI7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGEyYmUyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDAgMTlweCAzOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDAgMTVweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjOGEyYmUyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnRuIHtcXHJcXG4gIGNvbG9yOiAjOGEyYmUyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KSByb3RhdGVaKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRhc2staW5wdXQge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubXNnLWJveCB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiAjNzQ3NDc0O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmtleS10YWcge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzc0NzQ3NDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXI6Zm9jdXMtd2l0aGluIC5tc2ctYm94IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5wdXQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgY29sb3I6IGNyaW1zb247XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWctYnRuIHtcXHJcXG4gIGN1cnNvcjogZ3JhYjtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWNvbnRhaW5lciBsaTpmb2N1cy13aXRoaW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2JmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiAucmVtb3ZlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tY29udGFpbmVyIGxpOmZvY3VzLXdpdGhpbiAuZHJhZy1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWJ0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjNzQ3NDc0O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogIzRhMWU5ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItYnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTVlbSAwIDAgIzRhMWU5ZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdG9kby1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGNvbG9yOiAjNGExZTllO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByZW9yZGVyVG9kb0xpc3QgPSAodG9kb0xpc3QsIGZyb21JbmRleCwgdG9JbmRleCkgPT4ge1xyXG4gIGNvbnN0IG1vdmVVcCA9IGZyb21JbmRleCAtIHRvSW5kZXggPiAwO1xyXG4gIGlmIChtb3ZlVXApIHtcclxuICAgIGZvciAobGV0IGkgPSB0b0luZGV4OyBpIDwgZnJvbUluZGV4OyBpICs9IDEpIHtcclxuICAgICAgdG9kb0xpc3RbaV0uaW5kZXggPSB0b2RvTGlzdFtpICsgMV0uaW5kZXg7XHJcbiAgICB9XHJcbiAgICB0b2RvTGlzdFtmcm9tSW5kZXhdLmluZGV4ID0gdG9JbmRleDtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IHRvSW5kZXg7IGkgPiBmcm9tSW5kZXg7IGkgLT0gMSkge1xyXG4gICAgICB0b2RvTGlzdFtpXS5pbmRleCA9IHRvZG9MaXN0W2kgLSAxXS5pbmRleDtcclxuICAgIH1cclxuICAgIHRvZG9MaXN0W2Zyb21JbmRleF0uaW5kZXggPSB0b0luZGV4O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlb3JkZXJUb2RvTGlzdDtcclxuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Rhc2sgPSAoeyB0YXNrLCBsaXN0IH0pID0+IHtcbiAgY29uc3QgaW5kZXggPSBsaXN0Lmxlbmd0aDtcbiAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHsgdGFzaywgaW5kZXggfSk7XG4gIGxpc3QucHVzaCh0b2RvKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrID0gKHsgaW5kZXgsIGxpc3QgfSkgPT4ge1xuICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxpc3RbaV0uaW5kZXggLT0gMTtcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9ICh7IHRhc2ssIGluZGV4LCBsaXN0IH0pID0+IHtcbiAgbGlzdFtpbmRleF0udGFzayA9IHRhc2s7XG59O1xuIiwiaW1wb3J0IHVwZGF0ZVRvZG9TdGF0dXMgZnJvbSAnLi91cGRhdGUtc3RhdHVzLmpzJztcclxuaW1wb3J0IHsgdXBkYXRlVGFzayB9IGZyb20gJy4vdGFzay1tYW5hZ2VyLmpzJztcclxuXHJcbmNvbnN0IFRSQVNIX0lDT04gPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT4nO1xyXG5jb25zdCBEUkFHX0lDT04gPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1ncmlwLXZlcnRpY2FsXCI+PC9pPic7XHJcblxyXG5jb25zdCBtYWtlRWxlbWVudCA9ICh0YWcsIGNsYXNzTmFtZSwgdG9kb0luZGV4KSA9PiB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICBlbGVtLmRhdGFzZXQuaW5kZXggPSB0b2RvSW5kZXg7XHJcbiAgcmV0dXJuIGVsZW07XHJcbn07XHJcblxyXG5jb25zdCBtYWtlVG9kb0l0ZW0gPSAodG9kbywgdG9kb0xpc3QpID0+IHtcclxuICAvLyBDcmVhdGluZyBlbGVtZW50cyBmb3IgZWFjaCB0b2RvXHJcbiAgY29uc3QgbGkgPSBtYWtlRWxlbWVudCgnbGknLCAndG9kby1pdGVtJywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBtYWtlRWxlbWVudCgnaW5wdXQnLCAndG9kby1jaGVjaycsIHRvZG8uaW5kZXgpO1xyXG4gIGNvbnN0IHRhc2tJbnB1dCA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICd0YXNrLWlucHV0JywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgcmVtb3ZlQnRuID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdyZW1vdmUtYnRuJywgdG9kby5pbmRleCk7XHJcbiAgY29uc3QgZHJhZ0J0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnZHJhZy1idG4nLCB0b2RvLmluZGV4KTtcclxuXHJcbiAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgY2hlY2tCb3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGVkO1xyXG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICB1cGRhdGVUb2RvU3RhdHVzKHtcclxuICAgICAgaW5kZXg6IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEwKSxcclxuICAgICAgY29tcGxldGVkOiBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICBsaXN0OiB0b2RvTGlzdCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHRhc2tJbnB1dC52YWx1ZSA9IHRvZG8udGFzaztcclxuICBpZiAodG9kby5jb21wbGV0ZWQpIHRhc2tJbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh0YXNrLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgdXBkYXRlVGFzayh7XHJcbiAgICAgIHRhc2s6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBpbmRleDogZS50YXJnZXQuZGF0YXNldC5pbmRleCxcclxuICAgICAgbGlzdDogdG9kb0xpc3QsXHJcbiAgICB9KTtcclxuICB9KTtcclxuICByZW1vdmVCdG4uaW5uZXJIVE1MID0gVFJBU0hfSUNPTjtcclxuICBkcmFnQnRuLmlubmVySFRNTCA9IERSQUdfSUNPTjtcclxuICBkcmFnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcclxuICAgIGxpLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgfSk7XHJcbiAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG4gIGxpLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XHJcbiAgbGkuYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuICBsaS5hcHBlbmRDaGlsZChkcmFnQnRuKTtcclxuICByZXR1cm4gbGk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlVG9kb0l0ZW07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih7IHRhc2ssIGluZGV4LCBjb21wbGV0ZWQgPSBmYWxzZSB9KSB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiIsImNvbnN0IHVwZGF0ZVRvZG9TdGF0dXMgPSAoeyBpbmRleCwgY29tcGxldGVkLCBsaXN0IH0pID0+IHtcclxuICBpZiAoaW5kZXggPj0gbGlzdC5sZW5ndGgpIHJldHVybjtcclxuICBsaXN0W2luZGV4XS5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVUb2RvU3RhdHVzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IGFkZE5ld1Rhc2ssIGRlbGV0ZVRhc2sgfSBmcm9tICcuL3Rhc2stbWFuYWdlci5qcyc7XG5pbXBvcnQgbWFrZVRvZG9JdGVtIGZyb20gJy4vdG9kby1tYWtlci5qcyc7XG5pbXBvcnQgcmVvcmRlclRvZG9MaXN0IGZyb20gJy4vcmVvcmRlci1saXN0LmpzJztcblxuY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNvbnRhaW5lcicpO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWlucHV0Jyk7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1idG4nKTtcbmNvbnN0IGNsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb2NrJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcblxuY29uc3QgTE9DQUxfS0VZID0gJ21pY3JvdGFza3MtZGF0YSc7XG5cbmxldCBkcmFnSXRlbTtcbmxldCBkcm9wT247XG5cbmNvbnN0IGdldExvY2FsRGF0YSA9ICgpID0+IHtcbiAgbGV0IHRvZG9MaXN0ID0gW107XG4gIGNvbnN0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX0tFWSk7XG4gIGlmIChsb2NhbERhdGEgIT09IG51bGwpIHtcbiAgICB0b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxEYXRhKTtcbiAgfVxuICByZXR1cm4gdG9kb0xpc3Q7XG59O1xuXG5jb25zdCB1cGRhdGVUb2RvTGlzdCA9ICh0b2RvTGlzdCkgPT4ge1xuICAvLyB1cGRhdGUgZGlzcGxheSBhbmQgc3RvcmFnZVxuICB0b2RvQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIHRvZG9MaXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgdG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBtYWtlVG9kb0l0ZW0odG9kbywgdG9kb0xpc3QpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9LRVksIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG59O1xuXG4vKiAtLS0tLS0tTWFpbiBQcm9ncmFtLS0tLS0tLS0tLS0qL1xuY29uc3QgdG9kb0xpc3QgPSBnZXRMb2NhbERhdGEoKTtcbnVwZGF0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAvLyBoYW5kbGluZyByZW1vdmUgYnV0dG9uc1xuICBjb25zdCByZW1vdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlLWJ0bicpO1xuICBpZiAocmVtb3ZlQnRuID09PSBudWxsKSByZXR1cm47XG4gIGNvbnN0IGlkVG9SZW1vdmUgPSBwYXJzZUludChyZW1vdmVCdG4uZGF0YXNldC5pbmRleCwgMTApO1xuICBpZiAoaWRUb1JlbW92ZSA+PSB0b2RvTGlzdC5sZW5ndGgpIHJldHVybjtcbiAgZGVsZXRlVGFzayh7IGluZGV4OiBpZFRvUmVtb3ZlLCBsaXN0OiB0b2RvTGlzdCB9KTtcbiAgdXBkYXRlVG9kb0xpc3QodG9kb0xpc3QpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgLy8gYWRkaW5nIG5ldyB0YXNrIG9uIEVudGVyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXdUYXNrSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlmIChuZXdUYXNrLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGFkZE5ld1Rhc2soeyB0YXNrOiBuZXdUYXNrLCBsaXN0OiB0b2RvTGlzdCB9KTtcbiAgICB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB1cGRhdGVUb2RvTGlzdCh0b2RvTGlzdCkpO1xuXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY29tcGxldGVkSXRlbXMgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkKTtcbiAgY29tcGxldGVkSXRlbXMuZm9yRWFjaCgodG9kbykgPT5cbiAgICBkZWxldGVUYXNrKHsgaW5kZXg6IHRvZG8uaW5kZXgsIGxpc3Q6IHRvZG9MaXN0IH0pXG4gICk7XG4gIHVwZGF0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbn0pO1xuXG5kYXRlLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyk7XG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNsb2NrLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJyk7XG59LCAxMDAwKTtcblxuLy8gKiBEcmFnIGFuZCBEcm9wIEZlYXR1cmVcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgZHJhZ0l0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kby1pdGVtJyk7XG59KTtcblxudG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZSkgPT4ge1xuICBkcm9wT24gPSBlLnRhcmdldC5jbG9zZXN0KCcudG9kby1pdGVtJyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHtcbiAgaWYgKGRyYWdJdGVtID09PSBudWxsKSByZXR1cm47XG4gIGRyYWdJdGVtLmRyYWdnYWJsZSA9IGZhbHNlO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChkcmFnSXRlbSA9PT0gbnVsbCB8fCBkcm9wT24gPT09IG51bGwpIHJldHVybjtcbiAgcmVvcmRlclRvZG9MaXN0KFxuICAgIHRvZG9MaXN0LFxuICAgIHBhcnNlSW50KGRyYWdJdGVtLmRhdGFzZXQuaW5kZXgsIDEwKSxcbiAgICBwYXJzZUludChkcm9wT24uZGF0YXNldC5pbmRleCwgMTApXG4gICk7XG4gIHVwZGF0ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9