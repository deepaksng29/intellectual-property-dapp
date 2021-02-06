webpackHotUpdate_N_E("pages/intellectualproperty/register",{

/***/ "./pages/intellectualproperty/register.js":
/*!************************************************!*\
  !*** ./pages/intellectualproperty/register.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/RegisterIP.module.css */ \"./styles/RegisterIP.module.css\");\n/* harmony import */ var _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Documents/intellectual-property-dapp/pages/intellectualproperty/register.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar RegisterIP = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RegisterIP, _Component);\n\n  var _super = _createSuper(RegisterIP);\n\n  function RegisterIP() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, RegisterIP);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      addresses: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RegisterIP, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var addresses;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_14__[\"default\"].eth.getAccounts();\n\n              case 2:\n                addresses = _context.sent;\n                this.setState({\n                  addresses: addresses\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"renderAccountList\",\n    value: function renderAccountList() {\n      var select;\n      select = \"&lt;select id='accounts' name='accounts'&gt;\";\n\n      if (this.state.addresses != '') {\n        this.state.addresses.forEach(function (item, index) {\n          select = select + \"&lt;option value='\" + item + \"'&gt;\" + item + \"&lt;/option&gt;\";\n        });\n        select = select + \"&lt;/select&gt;\";\n        return select;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.main_grid_container,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n            className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.grid_item,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_13__[\"Link\"], {\n              route: \"/\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: \"Home\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 29\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 13\n            }, this), \" > \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_routes__WEBPACK_IMPORTED_MODULE_13__[\"Link\"], {\n              route: \"/intellectualproperty/register\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                children: \"Register\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 104\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 59\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            className: [_styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.grid_item, _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.section_form].join(\" \"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Intellectual Property Registration Form\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label1,\n              children: \"Account: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.name,\n              children: this.renderAccountList()\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label2,\n              children: \"Surname: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.surname,\n              type: \"text\",\n              placeholder: \"Text...\",\n              name: \"test\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label3,\n              children: \"Type of IP: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.radioButtons,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"radio\",\n                id: \"trademark\",\n                name: \"ip_type\",\n                value: \"trademark\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                \"for\": \"trademark\",\n                children: \"Trademark\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 55\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"radio\",\n                id: \"patent\",\n                name: \"ip_type\",\n                value: \"patent\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                \"for\": \"patent\",\n                children: \"Patent\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 49,\n                columnNumber: 49\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"radio\",\n                id: \"design\",\n                name: \"ip_type\",\n                value: \"design\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                \"for\": \"design\",\n                children: \"Design\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.label4,\n              children: \"File: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: _styles_RegisterIP_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.file,\n              type: \"file\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"submit\",\n              children: \"Register\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return RegisterIP;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterIP);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50ZWxsZWN0dWFscHJvcGVydHkvcmVnaXN0ZXIuanM/OTU0ZiJdLCJuYW1lcyI6WyJSZWdpc3RlcklQIiwiYWRkcmVzc2VzIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJzZWxlY3QiLCJzdGF0ZSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJzdHlsZSIsIm1haW5fZ3JpZF9jb250YWluZXIiLCJncmlkX2l0ZW0iLCJzZWN0aW9uX2Zvcm0iLCJqb2luIiwibGFiZWwxIiwibmFtZSIsInJlbmRlckFjY291bnRMaXN0IiwibGFiZWwyIiwic3VybmFtZSIsImxhYmVsMyIsInJhZGlvQnV0dG9ucyIsImxhYmVsNCIsImZpbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRTtBQURMLEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLa0JDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBbEJILHlCO0FBQ04scUJBQUtJLFFBQUwsQ0FBYztBQUFFSiwyQkFBUyxFQUFUQTtBQUFGLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBR2tCO0FBQ2xCLFVBQUlLLE1BQUo7QUFDQUEsWUFBTSxHQUFHLDhDQUFUOztBQUNBLFVBQUksS0FBS0MsS0FBTCxDQUFXTixTQUFYLElBQXdCLEVBQTVCLEVBQWdDO0FBQzlCLGFBQUtNLEtBQUwsQ0FBV04sU0FBWCxDQUFxQk8sT0FBckIsQ0FBNkIsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ2pESixnQkFBTSxHQUFHQSxNQUFNLEdBQUcsb0JBQVQsR0FBZ0NHLElBQWhDLEdBQXVDLE9BQXZDLEdBQWlEQSxJQUFqRCxHQUF3RCxpQkFBakU7QUFDRCxTQUZE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SyxDQUFDWSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkYsZUFrQkU7QUFBTyx1QkFBUyxFQUFFWixxRUFBSyxDQUFDYSxJQUF4QjtBQUE4QixrQkFBSSxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGLGVBbUJFO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBK0JEOzs7O0VBdERzQkMsZ0Q7O0FBeURWekIseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbnRlbGxlY3R1YWxwcm9wZXJ0eS9yZWdpc3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvUmVnaXN0ZXJJUC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgUmVnaXN0ZXJJUCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFkZHJlc3NlczogJydcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NlcyB9KTtcbiAgfVxuXG4gIHJlbmRlckFjY291bnRMaXN0KCkge1xuICAgIGxldCBzZWxlY3Q7XG4gICAgc2VsZWN0ID0gXCImbHQ7c2VsZWN0IGlkPSdhY2NvdW50cycgbmFtZT0nYWNjb3VudHMnJmd0O1wiO1xuICAgIGlmICh0aGlzLnN0YXRlLmFkZHJlc3NlcyAhPSAnJykge1xuICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzZXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICBzZWxlY3QgPSBzZWxlY3QgKyBcIiZsdDtvcHRpb24gdmFsdWU9J1wiICsgaXRlbSArIFwiJyZndDtcIiArIGl0ZW0gKyBcIiZsdDsvb3B0aW9uJmd0O1wiO1xuICAgICAgfSk7XG4gICAgICBzZWxlY3QgPSBzZWxlY3QgKyBcIiZsdDsvc2VsZWN0Jmd0O1wiO1xuICAgICAgcmV0dXJuIHNlbGVjdDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYWluX2dyaWRfY29udGFpbmVyfT5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZF9pdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL1wiPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L0xpbms+ID4gPExpbmsgcm91dGU9XCIvaW50ZWxsZWN0dWFscHJvcGVydHkvcmVnaXN0ZXJcIj48YSBocmVmPVwiI1wiPlJlZ2lzdGVyPC9hPjwvTGluaz5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e1tzdHlsZS5ncmlkX2l0ZW0sIHN0eWxlLnNlY3Rpb25fZm9ybV0uam9pbihcIiBcIil9PlxuICAgICAgICAgICAgPGgyPkludGVsbGVjdHVhbCBQcm9wZXJ0eSBSZWdpc3RyYXRpb24gRm9ybTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsMX0+QWNjb3VudDogPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9PlxuICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQWNjb3VudExpc3QoKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUubGFiZWwyfT5TdXJuYW1lOiA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZS5zdXJuYW1lfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGV4dC4uLlwiIG5hbWU9XCJ0ZXN0XCIvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbDN9PlR5cGUgb2YgSVA6IDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yYWRpb0J1dHRvbnN9PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0cmFkZW1hcmtcIiBuYW1lPVwiaXBfdHlwZVwiIHZhbHVlPVwidHJhZGVtYXJrXCIvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHJhZGVtYXJrXCI+VHJhZGVtYXJrPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXRlbnRcIiBuYW1lPVwiaXBfdHlwZVwiIHZhbHVlPVwicGF0ZW50XCIvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGF0ZW50XCI+UGF0ZW50PC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJkZXNpZ25cIiBuYW1lPVwiaXBfdHlwZVwiIHZhbHVlPVwiZGVzaWduXCIvPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzaWduXCI+RGVzaWduPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbDR9PkZpbGU6IDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlLmZpbGV9IHR5cGU9XCJmaWxlXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVySVA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/intellectualproperty/register.js\n");

/***/ })

})