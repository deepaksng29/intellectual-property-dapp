webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Index.module.css */ \"./styles/Index.module.css\");\n/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      address: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 2:\n                address = _context.sent;\n                this.setState({\n                  address: address\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.main_grid_container,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n            className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.grid_item,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 39\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n            className: [_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.section_welcome, _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.grid_item].join(\" \"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"What is intellectual property?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Intellectual property is something that has been created by the creator's mind, for example: algorithms, stories, paintings or music.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"To ensure that your intellectual property is protected from plagiarism to commercial use by a third-party, you must register this intellectual property.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"This web application allows you to register your intellectual property rights on the Ethereum blockchain, where it will be stored safely. This app also allows you to access, verify and manage your intellectual property using your Ethereum wallet.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n            className: [_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.section_search, _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.grid_item].join(\" \"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Search for intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"To search for an intellectual property, please enter the ethereum address of the intellectual property contract:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                placeholder: \"Search by ethereum address\",\n                name: \"search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 8\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                children: \"Search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 8\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.advanced_search,\n              href: \"#\",\n              children: \"Advanced Search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n            className: [_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.section_register, _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.grid_item].join(\" \"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Registering your intellectual property\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"To register your intellectual property, you must have the Metamask browser extension installed with an Ethereum wallet.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"To register your intellectual property you will need:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"The type of intellectual property you are registering\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 8\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"The Ethereum address of any co-owners of the intellectual property\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 8\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"The original file containing the intellectual property\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 8\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"The publication date for the intellectual property\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 8\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 6\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: [_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.button_start_register, _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_14___default.a.grid_item].join(\" \"),\n            children: \"Start registration\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsInN0eWxlIiwibWFpbl9ncmlkX2NvbnRhaW5lciIsImdyaWRfaXRlbSIsInNlY3Rpb25fd2VsY29tZSIsImpvaW4iLCJzZWN0aW9uX3NlYXJjaCIsImFkdmFuY2VkX3NlYXJjaCIsInNlY3Rpb25fcmVnaXN0ZXIiLCJidXR0b25fc3RhcnRfcmVnaXN0ZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0c7QUFDUEMsYUFBTyxFQUFFO0FBREYsSzs7Ozs7Ozs7Ozs7Ozs7O3VCQUtlQyx1REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWhCSCx1QjtBQUNKLHFCQUFLSSxRQUFMLENBQWM7QUFBRUoseUJBQU8sRUFBUEE7QUFBRixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdNO0FBQ1IsMEJBQ0MscUVBQUMsMkRBQUQ7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUVLLGdFQUFLLENBQUNDLG1CQUF0QjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBRUQsZ0VBQUssQ0FBQ0UsU0FBdEI7QUFBQSxtQ0FBaUM7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQVMscUJBQVMsRUFBRSxDQUFDRixnRUFBSyxDQUFDRyxlQUFQLEVBQXdCSCxnRUFBSyxDQUFDRSxTQUE5QixFQUF5Q0UsSUFBekMsQ0FBOEMsR0FBOUMsQ0FBcEI7QUFBQSxvQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZELGVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEQsZUFJQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQsZUFRQztBQUFTLHFCQUFTLEVBQUUsQ0FBQ0osZ0VBQUssQ0FBQ0ssY0FBUCxFQUF1QkwsZ0VBQUssQ0FBQ0UsU0FBN0IsRUFBd0NFLElBQXhDLENBQTZDLEdBQTdDLENBQXBCO0FBQUEsb0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxlQUdDO0FBQUEsc0NBQ0M7QUFBTyxvQkFBSSxFQUFDLE1BQVo7QUFBbUIsMkJBQVcsRUFBQyw0QkFBL0I7QUFBNEQsb0JBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUM7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhELGVBT0M7QUFBRyx1QkFBUyxFQUFFSixnRUFBSyxDQUFDTSxlQUFwQjtBQUFvQyxrQkFBSSxFQUFDLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRCxlQWlCQztBQUFTLHFCQUFTLEVBQUUsQ0FBQ04sZ0VBQUssQ0FBQ08sZ0JBQVAsRUFBeUJQLGdFQUFLLENBQUNFLFNBQS9CLEVBQTBDRSxJQUExQyxDQUErQyxHQUEvQyxDQUFwQjtBQUFBLG9DQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRCxlQUlDO0FBQUEsc0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhELGVBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqQkQsZUE0QkM7QUFBUSxxQkFBUyxFQUFFLENBQUNKLGdFQUFLLENBQUNRLHFCQUFQLEVBQThCUixnRUFBSyxDQUFDRSxTQUFwQyxFQUErQ0UsSUFBL0MsQ0FBb0QsR0FBcEQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQWtDQTs7OztFQTdDa0JLLGdEOztBQWdETGYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3MnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGFkZHJlc3M6ICcnXG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW5fZ3JpZF9jb250YWluZXJ9PlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkX2l0ZW19PjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L25hdj5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1tzdHlsZS5zZWN0aW9uX3dlbGNvbWUsIHN0eWxlLmdyaWRfaXRlbV0uam9pbihcIiBcIil9PlxuXHRcdFx0XHRcdFx0PGgyPldoYXQgaXMgaW50ZWxsZWN0dWFsIHByb3BlcnR5PzwvaDI+XG5cdFx0XHRcdFx0XHQ8cD5JbnRlbGxlY3R1YWwgcHJvcGVydHkgaXMgc29tZXRoaW5nIHRoYXQgaGFzIGJlZW4gY3JlYXRlZCBieSB0aGUgY3JlYXRvcidzIG1pbmQsIGZvciBleGFtcGxlOiBhbGdvcml0aG1zLCBzdG9yaWVzLCBwYWludGluZ3Mgb3IgbXVzaWMuPC9wPlxuXHRcdFx0XHRcdFx0PHA+VG8gZW5zdXJlIHRoYXQgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHkgaXMgcHJvdGVjdGVkIGZyb20gcGxhZ2lhcmlzbSB0byBjb21tZXJjaWFsIHVzZSBieSBhIHRoaXJkLXBhcnR5LCB5b3UgbXVzdCByZWdpc3RlciB0aGlzIGludGVsbGVjdHVhbCBwcm9wZXJ0eS48L3A+XG5cdFx0XHRcdFx0XHQ8cD5UaGlzIHdlYiBhcHBsaWNhdGlvbiBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyIHlvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiwgd2hlcmUgaXQgd2lsbCBiZSBzdG9yZWQgc2FmZWx5LiBUaGlzIGFwcCBhbHNvIGFsbG93cyB5b3UgdG8gYWNjZXNzLCB2ZXJpZnkgYW5kIG1hbmFnZSB5b3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSB1c2luZyB5b3VyIEV0aGVyZXVtIHdhbGxldC48L3A+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17W3N0eWxlLnNlY3Rpb25fc2VhcmNoLCBzdHlsZS5ncmlkX2l0ZW1dLmpvaW4oXCIgXCIpfT5cblx0XHRcdFx0XHRcdDxoMj5TZWFyY2ggZm9yIGludGVsbGVjdHVhbCBwcm9wZXJ0eTwvaDI+XG5cdFx0XHRcdFx0XHQ8cD5UbyBzZWFyY2ggZm9yIGFuIGludGVsbGVjdHVhbCBwcm9wZXJ0eSwgcGxlYXNlIGVudGVyIHRoZSBldGhlcmV1bSBhZGRyZXNzIG9mIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgY29udHJhY3Q6PC9wPlxuXHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGV0aGVyZXVtIGFkZHJlc3NcIiBuYW1lPVwic2VhcmNoXCIgLz5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e3N0eWxlLmFkdmFuY2VkX3NlYXJjaH1ocmVmPVwiI1wiPkFkdmFuY2VkIFNlYXJjaDwvYT5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbc3R5bGUuc2VjdGlvbl9yZWdpc3Rlciwgc3R5bGUuZ3JpZF9pdGVtXS5qb2luKFwiIFwiKX0+XG5cdFx0XHRcdFx0XHQ8aDI+UmVnaXN0ZXJpbmcgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHk8L2gyPlxuXHRcdFx0XHRcdFx0PHA+VG8gcmVnaXN0ZXIgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHksIHlvdSBtdXN0IGhhdmUgdGhlIE1ldGFtYXNrIGJyb3dzZXIgZXh0ZW5zaW9uIGluc3RhbGxlZCB3aXRoIGFuIEV0aGVyZXVtIHdhbGxldC48L3A+XG5cdFx0XHRcdFx0XHQ8aDI+VG8gcmVnaXN0ZXIgeW91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHkgeW91IHdpbGwgbmVlZDo8L2gyPlxuXHRcdFx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdFx0XHQ8bGk+VGhlIHR5cGUgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHlvdSBhcmUgcmVnaXN0ZXJpbmc8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+VGhlIEV0aGVyZXVtIGFkZHJlc3Mgb2YgYW55IGNvLW93bmVycyBvZiB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlRoZSBvcmlnaW5hbCBmaWxlIGNvbnRhaW5pbmcgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eTwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5UaGUgcHVibGljYXRpb24gZGF0ZSBmb3IgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eTwvbGk+XG5cdFx0XHRcdFx0XHQ8L29sPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17W3N0eWxlLmJ1dHRvbl9zdGFydF9yZWdpc3Rlciwgc3R5bGUuZ3JpZF9pdGVtXS5qb2luKFwiIFwiKX0+U3RhcnQgcmVnaXN0cmF0aW9uPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})