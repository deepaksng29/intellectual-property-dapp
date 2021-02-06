webpackHotUpdate_N_E("pages/intellectualproperty/register",{

/***/ "./pages/intellectualproperty/register.js":
/*!************************************************!*\
  !*** ./pages/intellectualproperty/register.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/RegisterIP.module.css */ \"./styles/RegisterIP.module.css\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/intellectualproperty/register.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar RegisterIP = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RegisterIP, _Component);\n\n  var _super = _createSuper(RegisterIP);\n\n  function RegisterIP() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, RegisterIP);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      addresses: '',\n      select: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RegisterIP, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var addresses;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__[\"default\"].eth.getAccounts();\n\n              case 2:\n                addresses = _context.sent;\n                this.setState({\n                  addresses: addresses\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"renderAccountList\",\n    value: function renderAccountList() {\n      var select;\n      select = \"<select id='accounts' name='accounts'>\";\n\n      if (this.state.addresses != '') {\n        this.state.addresses.forEach(function (item, index) {\n          select = select + \"<option value='item'>\" + {\n            item: item\n          } + \"</option>\";\n        });\n        select = select + \"</select>\";\n        return select;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.main_grid_container,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.grid_item,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_13__[\"Link\"], {\n              route: \"/\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: \"Home\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 29\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 13\n            }, this), \" > \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_13__[\"Link\"], {\n              route: \"/intellectualproperty/register\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: \"Register\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 104\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 59\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            className: [_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.grid_item, _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.section_form].join(\" \"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Intellectual Property Registration Form\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label1,\n              children: \"Account: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.name,\n              children: this.renderAccountList()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label2,\n              children: \"Surname: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.surname,\n              type: \"text\",\n              placeholder: \"Text...\",\n              name: \"test\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label3,\n              children: \"Type of IP: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.radioButtons,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"radio\",\n                id: \"trademark\",\n                name: \"ip_type\",\n                value: \"trademark\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                \"for\": \"trademark\",\n                children: \"Trademark\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 55\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"radio\",\n                id: \"patent\",\n                name: \"ip_type\",\n                value: \"patent\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                \"for\": \"patent\",\n                children: \"Patent\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 49\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"radio\",\n                id: \"design\",\n                name: \"ip_type\",\n                value: \"design\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                \"for\": \"design\",\n                children: \"Design\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label4,\n              children: \"File: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.file,\n              type: \"file\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"submit\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return RegisterIP;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterIP);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50ZWxsZWN0dWFscHJvcGVydHkvcmVnaXN0ZXIuanM/OTU0ZiJdLCJuYW1lcyI6WyJSZWdpc3RlcklQIiwiYWRkcmVzc2VzIiwic2VsZWN0Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJzdGF0ZSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJzdHlsZSIsIm1haW5fZ3JpZF9jb250YWluZXIiLCJncmlkX2l0ZW0iLCJzZWN0aW9uX2Zvcm0iLCJqb2luIiwibGFiZWwxIiwibmFtZSIsInJlbmRlckFjY291bnRMaXN0IiwibGFiZWwyIiwic3VybmFtZSIsImxhYmVsMyIsInJhZGlvQnV0dG9ucyIsImxhYmVsNCIsImZpbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRSxFQURMO0FBRU5DLFlBQU0sRUFBRTtBQUZGLEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNa0JDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBbEJKLHlCO0FBQ04scUJBQUtLLFFBQUwsQ0FBYztBQUFFTCwyQkFBUyxFQUFUQTtBQUFGLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBR2tCO0FBQ2xCLFVBQUlDLE1BQUo7QUFDQUEsWUFBTSxHQUFHLHdDQUFUOztBQUNBLFVBQUksS0FBS0ssS0FBTCxDQUFXTixTQUFYLElBQXdCLEVBQTVCLEVBQWdDO0FBQzlCLGFBQUtNLEtBQUwsQ0FBV04sU0FBWCxDQUFxQk8sT0FBckIsQ0FBNkIsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ2pEUixnQkFBTSxHQUFHQSxNQUFNLEdBQUcsdUJBQVQsR0FBbUM7QUFBQ08sZ0JBQUksRUFBSkE7QUFBRCxXQUFuQyxHQUE0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dUJBQVMsRUFBRVgscUVBQUssQ0FBQ1ksTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJGLGVBa0JFO0FBQU8sdUJBQVMsRUFBRVoscUVBQUssQ0FBQ2EsSUFBeEI7QUFBOEIsa0JBQUksRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWxCRixlQW1CRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQThCRDs7OztFQXREc0JDLGdEOztBQXlEVnpCLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW50ZWxsZWN0dWFscHJvcGVydHkvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL1JlZ2lzdGVySVAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNsYXNzIFJlZ2lzdGVySVAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhZGRyZXNzZXM6ICcnLFxuICAgIHNlbGVjdDogJydcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NlcyB9KTtcbiAgfVxuXG4gIHJlbmRlckFjY291bnRMaXN0KCkge1xuICAgIGxldCBzZWxlY3Q7XG4gICAgc2VsZWN0ID0gXCI8c2VsZWN0IGlkPSdhY2NvdW50cycgbmFtZT0nYWNjb3VudHMnPlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLmFkZHJlc3NlcyAhPSAnJykge1xuICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICBzZWxlY3QgPSBzZWxlY3QgKyBcIjxvcHRpb24gdmFsdWU9J2l0ZW0nPlwiICsge2l0ZW19ICsgXCI8L29wdGlvbj5cIjtcbiAgICAgIH0pO1xuICAgICAgc2VsZWN0ID0gc2VsZWN0ICsgXCI8L3NlbGVjdD5cIjtcbiAgICAgIHJldHVybiBzZWxlY3Q7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFpbl9ncmlkX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlLmdyaWRfaXRlbX0+XG4gICAgICAgICAgICA8TGluayByb3V0ZT1cIi9cIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9MaW5rPiA+IDxMaW5rIHJvdXRlPVwiL2ludGVsbGVjdHVhbHByb3BlcnR5L3JlZ2lzdGVyXCI+PGEgaHJlZj1cIiNcIj5SZWdpc3RlcjwvYT48L0xpbms+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtbc3R5bGUuZ3JpZF9pdGVtLCBzdHlsZS5zZWN0aW9uX2Zvcm1dLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgIDxoMj5JbnRlbGxlY3R1YWwgUHJvcGVydHkgUmVnaXN0cmF0aW9uIEZvcm08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbDF9PkFjY291bnQ6IDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5cbiAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckFjY291bnRMaXN0KCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsMn0+U3VybmFtZTogPC9wPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGUuc3VybmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRleHQuLi5cIiBuYW1lPVwidGVzdFwiLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUubGFiZWwzfT5UeXBlIG9mIElQOiA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmFkaW9CdXR0b25zfT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwidHJhZGVtYXJrXCIgbmFtZT1cImlwX3R5cGVcIiB2YWx1ZT1cInRyYWRlbWFya1wiLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRyYWRlbWFya1wiPlRyYWRlbWFyazwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGF0ZW50XCIgbmFtZT1cImlwX3R5cGVcIiB2YWx1ZT1cInBhdGVudFwiLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhdGVudFwiPlBhdGVudDwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiZGVzaWduXCIgbmFtZT1cImlwX3R5cGVcIiB2YWx1ZT1cImRlc2lnblwiLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2lnblwiPkRlc2lnbjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUubGFiZWw0fT5GaWxlOiA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZS5maWxlfSB0eXBlPVwiZmlsZVwiLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJJUDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/intellectualproperty/register.js\n");

/***/ })

})