webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/deepaksng00/Google Drive/University/Files/Manchester Metropolitan University/Level 6 - BSc Computer Science/Project/intellectual-property-dapp/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n/* --- Semantic-UI --- */\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"state\", {\n      address: ''\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 2:\n                address = _context.sent;\n                this.setState({\n                  address: address\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"renderStatus\",\n    value: function renderStatus() {\n      if (this.state.address == \"\") {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Segment\"], {\n          color: \"red\",\n          children: [\"Status: Disconnected \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 53\n          }, this), \" We are unable to connect to your MetaMask wallet, please ensure MetaMask is working correctly. If MetaMask is working correctly, please refresh the page.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this);\n      } else {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Segment\"], {\n          color: \"green\",\n          children: [\"Status: Connected \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 52\n          }, this), \" Your account address: \", this.state.address[0]]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var options = [{\n        key: 'Trademark',\n        text: 'Trademark',\n        value: 'trademark'\n      }, {\n        key: 'Patent',\n        text: 'Patent',\n        value: 'patent'\n      }, {\n        key: 'Design',\n        text: 'Design',\n        value: 'design'\n      }];\n      var segment;\n      var top_container;\n      var middle_container;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"ui icon message\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            \"class\": \"inbox icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 3\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"content\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              \"class\": \"header\",\n              children: \"Have you heard about our mailing list?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 5\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Get the best news in your e-mail every day.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 5\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 3\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"one column row\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Welcome to the intellectual property website.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          \"class\": \"one column row\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Input\"], {\n              iconPosition: \"left\",\n              type: \"text\",\n              placeholder: \"Search by Address\",\n              action: true,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Icon\"], {\n                name: \"search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Select\"], {\n                compact: true,\n                options: options,\n                defaultValue: \"trademark\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 9\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__[\"Button\"], {\n                type: \"submit\",\n                children: \"Search\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 9\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            \"class\": \"one column row\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              \"class\": \"ui left floated button\",\n              children: \"Right Floated\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZXRTdGF0ZSIsInN0YXRlIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsInNlZ21lbnQiLCJ0b3BfY29udGFpbmVyIiwibWlkZGxlX2NvbnRhaW5lciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNHO0FBQ1BDLGFBQU8sRUFBRTtBQURGLEs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLZUMsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFoQkgsdUI7QUFDTixxQkFBS0ksUUFBTCxDQUFlO0FBQUVKLHlCQUFPLEVBQVBBO0FBQUYsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FHYztBQUNkLFVBQUksS0FBS0ssS0FBTCxDQUFXTCxPQUFYLElBQXNCLEVBQTFCLEVBQThCO0FBQzdCLDRCQUFPLHFFQUFDLDBEQUFEO0FBQVMsZUFBSyxFQUFDLEtBQWY7QUFBQSwyREFBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0EsT0FGRCxNQUVPO0FBQ04sNEJBQU8scUVBQUMsMERBQUQ7QUFBUyxlQUFLLEVBQUMsT0FBZjtBQUFBLHdEQUF5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF6Qyw2QkFBd0UsS0FBS0ssS0FBTCxDQUFXTCxPQUFYLENBQW1CLENBQW5CLENBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNBO0FBQ0Q7Ozs2QkFFUTtBQUNSLFVBQU1NLE9BQU8sR0FBRyxDQUNWO0FBQUVDLFdBQUcsRUFBRSxXQUFQO0FBQW9CQyxZQUFJLEVBQUUsV0FBMUI7QUFBdUNDLGFBQUssRUFBRTtBQUE5QyxPQURVLEVBRVY7QUFBRUYsV0FBRyxFQUFFLFFBQVA7QUFBaUJDLFlBQUksRUFBRSxRQUF2QjtBQUFpQ0MsYUFBSyxFQUFFO0FBQXhDLE9BRlUsRUFHVjtBQUFFRixXQUFHLEVBQUUsUUFBUDtBQUFpQkMsWUFBSSxFQUFFLFFBQXZCO0FBQWlDQyxhQUFLLEVBQUU7QUFBeEMsT0FIVSxDQUFoQjtBQU1BLFVBQUlDLE9BQUo7QUFDQSxVQUFJQyxhQUFKO0FBQ0EsVUFBSUMsZ0JBQUo7QUFFQSwwQkFDQyxxRUFBQywyREFBRDtBQUFBLGdDQUNDO0FBQUssbUJBQU0saUJBQVg7QUFBQSxrQ0FDRjtBQUFHLHFCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERSxlQUVGO0FBQUsscUJBQU0sU0FBWDtBQUFBLG9DQUNFO0FBQUssdUJBQU0sUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFXRTtBQUFLLG1CQUFRLGdCQUFiO0FBQUEsaUNBQ0M7QUFBSyxxQkFBUSxRQUFiO0FBQUEsbUNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQWdCRTtBQUFLLG1CQUFRLGdCQUFiO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUSxRQUFiO0FBQUEsbUNBQ0MscUVBQUMsd0RBQUQ7QUFBTywwQkFBWSxFQUFDLE1BQXBCO0FBQTJCLGtCQUFJLEVBQUMsTUFBaEM7QUFBdUMseUJBQVcsRUFBQyxtQkFBbkQ7QUFBdUUsb0JBQU0sTUFBN0U7QUFBQSxzQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUMscUVBQUMsdURBQUQ7QUFBTSxvQkFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRCxlQUdDLHFFQUFDLHlEQUFEO0FBQVEsdUJBQU8sTUFBZjtBQUFnQix1QkFBTyxFQUFFTixPQUF6QjtBQUFrQyw0QkFBWSxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEQsZUFJQyxxRUFBQyx5REFBRDtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBVUM7QUFBSyxxQkFBUSxnQkFBYjtBQUFBLG1DQUNDO0FBQVEsdUJBQU0sd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFpQ0E7Ozs7RUE5RGtCTyxnRDs7QUFvRUxkLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG4vKiAtLS0gU2VtYW50aWMtVUkgLS0tICovXG5pbXBvcnQgeyBIZWFkZXIsIElucHV0LCBCdXR0b24sIFNlbGVjdCwgSWNvbiwgU2VnbWVudCwgTGFiZWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0YWRkcmVzczogJydcblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFkZHJlc3MgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdHRoaXMuc2V0U3RhdGUgKHsgYWRkcmVzcyB9KTtcblx0fVxuXG5cdHJlbmRlclN0YXR1cygpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hZGRyZXNzID09IFwiXCIpIHtcblx0XHRcdHJldHVybiA8U2VnbWVudCBjb2xvcj0ncmVkJz5TdGF0dXM6IERpc2Nvbm5lY3RlZCA8YnIgLz4gV2UgYXJlIHVuYWJsZSB0byBjb25uZWN0IHRvIHlvdXIgTWV0YU1hc2sgd2FsbGV0LCBwbGVhc2UgZW5zdXJlIE1ldGFNYXNrIGlzIHdvcmtpbmcgY29ycmVjdGx5LiBJZiBNZXRhTWFzayBpcyB3b3JraW5nIGNvcnJlY3RseSwgcGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UuPC9TZWdtZW50PlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gPFNlZ21lbnQgY29sb3I9J2dyZWVuJz5TdGF0dXM6IENvbm5lY3RlZCA8YnIgLz4gWW91ciBhY2NvdW50IGFkZHJlc3M6IHsgdGhpcy5zdGF0ZS5hZGRyZXNzWzBdIH08L1NlZ21lbnQ+XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBbXG4gIFx0XHQgICAgeyBrZXk6ICdUcmFkZW1hcmsnLCB0ZXh0OiAnVHJhZGVtYXJrJywgdmFsdWU6ICd0cmFkZW1hcmsnIH0sXG4gIFx0XHQgICAgeyBrZXk6ICdQYXRlbnQnLCB0ZXh0OiAnUGF0ZW50JywgdmFsdWU6ICdwYXRlbnQnIH0sXG4gIFx0XHQgICAgeyBrZXk6ICdEZXNpZ24nLCB0ZXh0OiAnRGVzaWduJywgdmFsdWU6ICdkZXNpZ24nIH0sXG5cdFx0XTtcblxuXHRcdGxldCBzZWdtZW50O1xuXHRcdGxldCB0b3BfY29udGFpbmVyO1xuXHRcdGxldCBtaWRkbGVfY29udGFpbmVyO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ1aSBpY29uIG1lc3NhZ2VcIj5cbiAgPGkgY2xhc3M9XCJpbmJveCBpY29uXCI+PC9pPlxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIEhhdmUgeW91IGhlYXJkIGFib3V0IG91ciBtYWlsaW5nIGxpc3Q/XG4gICAgPC9kaXY+XG4gICAgPHA+R2V0IHRoZSBiZXN0IG5ld3MgaW4geW91ciBlLW1haWwgZXZlcnkgZGF5LjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3MgPSBcIm9uZSBjb2x1bW4gcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0PHA+V2VsY29tZSB0byB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHdlYnNpdGUuPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcyA9IFwib25lIGNvbHVtbiByb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3MgPSBcImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXQgaWNvblBvc2l0aW9uPSdsZWZ0JyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IEFkZHJlc3MnIGFjdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgLz5cblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPSdzZWFyY2gnIC8+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBjb21wYWN0IG9wdGlvbnM9e29wdGlvbnN9IGRlZmF1bHRWYWx1ZT0ndHJhZGVtYXJrJyAvPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nc3VibWl0Jz5TZWFyY2g8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9JbnB1dD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJvbmUgY29sdW1uIHJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwidWkgbGVmdCBmbG9hdGVkIGJ1dHRvblwiPlJpZ2h0IEZsb2F0ZWQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})