/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/blocks/author/block.json":
/*!**************************************!*\
  !*** ./src/blocks/author/block.json ***!
  \**************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = {"name":"building-blocks/author","category":"common","attributes":{"name":{"type":"string","selector":".wp-block-building-blocks-author__name"},"biography":{"type":"array","source":"children","selector":".wp-block-building-blocks-author__biography"},"mediaID":{"type":"number"},"mediaURL":{"type":"string","source":"attribute","selector":"img","attribute":"src"},"mediaALT":{"type":"string","source":"attribute","selector":"img","attribute":"alt"}}};

/***/ }),

/***/ "./src/blocks/author/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/author/edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_12__);









/**
 * WordPress dependencies
 */






/**
 * Edit Function
 */

var AuthorEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AuthorEdit, _Component);

  function AuthorEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthorEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(AuthorEdit).apply(this, arguments));
    _this.addImage = _this.addImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSelectImage = _this.onSelectImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthorEdit, [{
    key: "onSelectImage",
    value: function onSelectImage(media) {
      if (media) {
        this.props.setAttributes({
          mediaURL: media.url,
          mediaID: media.id
        });
      }
    }
  }, {
    key: "addImage",
    value: function addImage(files) {
      var _this2 = this;

      Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_9__["mediaUpload"])({
        allowedTypes: ['image'],
        filesList: files,
        onFileChange: function onFileChange(_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),
              media = _ref2[0];

          return _this2.onSelectImage(media);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          isSelected = _this$props.isSelected;
      var name = attributes.name,
          biography = attributes.biography,
          mediaURL = attributes.mediaURL,
          mediaID = attributes.mediaID,
          mediaALT = attributes.mediaALT;
      var dropZone = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["DropZone"], {
        onFilesDrop: this.addImage,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Drop to upload as avatar', 'building-blocks')
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, mediaID && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaUpload"], {
        onSelect: this.onSelectImage,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref3) {
          var open = _ref3.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
            className: "components-toolbar__control",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Edit avatar', 'building-blocks'),
            icon: "edit",
            onClick: open
          });
        }
      })))), isSelected && mediaID && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Author Settings', 'building-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Alt Text (Alternative Text)', 'building-blocks'),
        value: mediaALT,
        onChange: function onChange(nextMediaALT) {
          setAttributes({
            mediaALT: nextMediaALT
          });
        },
        help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ExternalLink"], {
          href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Describe the purpose of the image', 'building-blocks')), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Leave empty if the image is purely decorative.', 'building-blocks'))
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: className
      }, dropZone, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("figure", {
        className: "wp-block-building-blocks-author__avatar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["MediaUpload"], {
        onSelect: this.onSelectImage,
        allowedTypes: "image",
        value: mediaID,
        render: function render(_ref4) {
          var open = _ref4.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            onClick: open
          }, !mediaID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Dashicon"], {
            icon: "format-image"
          }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_12__["isBlobURL"])(mediaURL) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
            className: "wp-block-building-blocks-author__avatar-img",
            src: mediaURL,
            alt: mediaALT
          })));
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "wp-block-building-blocks-author__content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
        identifier: "name",
        tagName: "span",
        className: "wp-block-building-blocks-author__name",
        multiline: false,
        onChange: function onChange(nextName) {
          setAttributes({
            name: nextName
          });
        },
        value: name,
        placeholder: // translators: placeholder text used for the quote
        Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Write author name…', 'building-blocks'),
        keepPlaceholderOnFocus: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["RichText"], {
        identifier: "biography",
        tagName: "span",
        className: "wp-block-building-blocks-author__biography",
        onChange: function onChange(nextBiography) {
          setAttributes({
            biography: nextBiography
          });
        },
        value: biography,
        placeholder: // translators: placeholder text used for the quote
        Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Write author biography…', 'building-blocks'),
        keepPlaceholderOnFocus: true
      }))));
    }
  }]);

  return AuthorEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AuthorEdit);

/***/ }),

/***/ "./src/blocks/author/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/author/icon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fill: "none",
  d: "M0 0h24v24H0z"
})));

/***/ }),

/***/ "./src/blocks/author/index.js":
/*!************************************!*\
  !*** ./src/blocks/author/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/author/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/blocks/author/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/blocks/author/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/author/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _block_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _block_json__WEBPACK_IMPORTED_MODULE_3__});
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Block Registration
 */

var name = _block_json__WEBPACK_IMPORTED_MODULE_3__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_3__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_3__.attributes;
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])(name, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Building Blocks (Author)', 'building-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add an author biography to build credibility and authority.', 'building-blocks'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  category: category,
  styles: [{
    name: 'circle',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Circle', 'block style', 'building-blocks'),
    isDefault: true
  }, {
    name: 'square',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Square', 'block style', 'building-blocks')
  }],
  example: {},
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/blocks/author/save.js":
/*!***********************************!*\
  !*** ./src/blocks/author/save.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/**
 * Save Function
 */

var save = function save(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, attributes.mediaID && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
    className: "wp-block-building-blocks-author__avatar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "wp-block-building-blocks-author__avatar-img",
    src: attributes.mediaURL,
    alt: attributes.mediaALT
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-building-blocks-author__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "span",
    className: "wp-block-building-blocks-author__name",
    value: attributes.name
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "span",
    className: "wp-block-building-blocks-author__biography",
    value: attributes.biography
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author */ "./src/blocks/author/index.js");
/**
 * Internal dependencies
 */


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/**
 * Internal dependencies
 */


/***/ }),

/***/ "@wordpress/blob":
/*!***************************************!*\
  !*** external {"this":["wp","blob"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blob"]; }());

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map