webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Index.module.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/Index.module.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Index_main_grid_container__2vVAu {\\n  display: grid;\\n  grid-template-areas:\\n    \\\"nav\\\"\\n    \\\"welcome\\\"\\n    \\\"search\\\"\\n    \\\"register\\\"\\n    \\\"register-button\\\"\\n}\\n\\n.Index_grid_item__3QRZA {\\n  margin-left: 5%;\\n  margin-right: 5%;\\n}\\n\\n.Index_main_grid_container__2vVAu > nav {\\n  grid-area: nav;\\n  background-color: green;\\n}\\n\\n.Index_section_welcome__1yzvd {\\n  grid-area: welcome;\\n  background-color: blue;\\n  border-bottom: 2px solid #4d0066;\\n}\\n\\n.Index_section_search__1aJk1 {\\n  grid-area: search;\\n  background-color: yellow;\\n  border-bottom: 2px solid #4d0066;\\n}\\n\\n.Index_section_register__3fs_C {\\n  grid-area: register;\\n  background-color: pink;\\n}\\n\\n.Index_button_start_register__1hghn {\\n  grid-area: register-button;\\n  background-color: #4d0066;\\n  width: 20%;\\n  justify-self: center;\\n  padding: 1.2%;\\n  border-radius: 30px;\\n  font-size: 1.2rem;\\n  color: white;\\n}\\n\\n/* html, body {\\n  font-family: Arial, sans-serif;\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\np, ol {\\n  line-height: 22px;\\n  font-size: 1.1em;\\n}\\n\\nh2 {\\n  font-size: 2em;\\n  color: #4d0066;\\n} */\\n\\n/* .grid-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 0.2fr 1fr;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"nav nav\\\"\\n    \\\"welcome welcome\\\"\\n    \\\"divider-one divider-one\\\"\\n    \\\"search-bar search-bar\\\"\\n    \\\"divider-two divider-two\\\"\\n    \\\"register attention\\\"\\n    \\\"start-register start-register\\\"\\n    \\\"footer footer\\\";\\n}\\n\\n.divider-one {\\n  grid-area: divider-one;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n  width: 100%;\\n  border: 1px solid #4d0066;\\n\\n}\\n\\n.divider-two {\\n  grid-area: divider-two;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n  width: 100%;\\n  border: 1px solid #4d0066;\\n}\\n\\n\\n\\n/* nav {\\n  grid-area: nav;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  padding: 0;\\n  margin-top: 1em;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n}  */\\n\\n/* .title {\\n  margin-left: 3em;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n.welcome {\\n  grid-area: welcome;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n  margin-top: 1em;\\n}\\n\\n.search-bar {\\n  grid-area: search-bar;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n}\\n\\n.search-bar > form {\\n  display: flex;\\n}\\n\\n.flex-stretch {\\n  flex-grow: 0;\\n}\\n\\n.search-bar > form > input {\\n  transition: padding 0.5s;\\n  padding: 1%;\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  font-size: 1em;\\n  width: 25em;\\n}\\n\\n.search-bar > form > button {\\n  transition: padding 0.5s;\\n  margin-left: 10px;\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  font-size: 1em;\\n  background-color: #4d0066;\\n  color: white;\\n  font-weight: bold;\\n}\\n\\n.search-bar > form > button:hover {\\n  padding: 1em;\\n}\\n\\n.button {\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  font-size: 1em;\\n  padding: 5px;\\n}\\n\\n.advanced-search {\\n  float: left;\\n  margin-top: 1em;\\n  margin-bottom: 2%;\\n}\\n\\n.attention {\\n  grid-area: attention;\\n  grid-column-start: 4;\\n  grid-column-end: 5;\\n  justify-self: end;\\n  margin-right: 7em;\\n  border: 1px solid black;\\n  padding: 10px;\\n  background-color: #4d0066;\\n  display: none;\\n}\\n\\n.register {\\n  grid-area: register;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n}\\n\\n.start-register {\\n  grid-area: start-register;\\n  margin-top: 1em;\\n  padding: 1.2em;\\n  background-color: #4d0066;\\n  color: white;\\n  font-weight: bold;\\n  transition: padding 0.5s;\\n  border-radius: 30px;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n  max-width: 15em;\\n  justify-self: center;\\n\\n}\\n\\n.start-register:hover {\\n  padding: 1.8em;\\n} */\\n/*\\nfooter {\\n  grid-area: footer;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  background-color: #4d0066;\\n  color: white;\\n  margin-top: 4em;\\n}\\n\\nfooter > h2 {\\n  color: white;\\n  margin-left: 3em;\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Index.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb;;;;;;AAMF;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,UAAU;EACV,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;AACd;;AAEA;;;;;;;;;;;;;;GAcG;;AAEH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8CI;;AAEJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA4GG;AACH;;;;;;;;;;;;;GAaG\",\"sourcesContent\":[\".main_grid_container {\\n  display: grid;\\n  grid-template-areas:\\n    \\\"nav\\\"\\n    \\\"welcome\\\"\\n    \\\"search\\\"\\n    \\\"register\\\"\\n    \\\"register-button\\\"\\n}\\n\\n.grid_item {\\n  margin-left: 5%;\\n  margin-right: 5%;\\n}\\n\\n.main_grid_container > nav {\\n  grid-area: nav;\\n  background-color: green;\\n}\\n\\n.section_welcome {\\n  grid-area: welcome;\\n  background-color: blue;\\n  border-bottom: 2px solid #4d0066;\\n}\\n\\n.section_search {\\n  grid-area: search;\\n  background-color: yellow;\\n  border-bottom: 2px solid #4d0066;\\n}\\n\\n.section_register {\\n  grid-area: register;\\n  background-color: pink;\\n}\\n\\n.button_start_register {\\n  grid-area: register-button;\\n  background-color: #4d0066;\\n  width: 20%;\\n  justify-self: center;\\n  padding: 1.2%;\\n  border-radius: 30px;\\n  font-size: 1.2rem;\\n  color: white;\\n}\\n\\n/* html, body {\\n  font-family: Arial, sans-serif;\\n  margin: 0px;\\n  padding: 0px;\\n}\\n\\np, ol {\\n  line-height: 22px;\\n  font-size: 1.1em;\\n}\\n\\nh2 {\\n  font-size: 2em;\\n  color: #4d0066;\\n} */\\n\\n/* .grid-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 0.2fr 1fr;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"nav nav\\\"\\n    \\\"welcome welcome\\\"\\n    \\\"divider-one divider-one\\\"\\n    \\\"search-bar search-bar\\\"\\n    \\\"divider-two divider-two\\\"\\n    \\\"register attention\\\"\\n    \\\"start-register start-register\\\"\\n    \\\"footer footer\\\";\\n}\\n\\n.divider-one {\\n  grid-area: divider-one;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n  width: 100%;\\n  border: 1px solid #4d0066;\\n\\n}\\n\\n.divider-two {\\n  grid-area: divider-two;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-top: 2em;\\n  margin-bottom: 2em;\\n  width: 100%;\\n  border: 1px solid #4d0066;\\n}\\n\\n\\n\\n/* nav {\\n  grid-area: nav;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  padding: 0;\\n  margin-top: 1em;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n}  */\\n\\n/* .title {\\n  margin-left: 3em;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n.welcome {\\n  grid-area: welcome;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n  margin-top: 1em;\\n}\\n\\n.search-bar {\\n  grid-area: search-bar;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n}\\n\\n.search-bar > form {\\n  display: flex;\\n}\\n\\n.flex-stretch {\\n  flex-grow: 0;\\n}\\n\\n.search-bar > form > input {\\n  transition: padding 0.5s;\\n  padding: 1%;\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  font-size: 1em;\\n  width: 25em;\\n}\\n\\n.search-bar > form > button {\\n  transition: padding 0.5s;\\n  margin-left: 10px;\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  font-size: 1em;\\n  background-color: #4d0066;\\n  color: white;\\n  font-weight: bold;\\n}\\n\\n.search-bar > form > button:hover {\\n  padding: 1em;\\n}\\n\\n.button {\\n  border-radius: 5px;\\n  border: 1px solid black;\\n  font-size: 1em;\\n  padding: 5px;\\n}\\n\\n.advanced-search {\\n  float: left;\\n  margin-top: 1em;\\n  margin-bottom: 2%;\\n}\\n\\n.attention {\\n  grid-area: attention;\\n  grid-column-start: 4;\\n  grid-column-end: 5;\\n  justify-self: end;\\n  margin-right: 7em;\\n  border: 1px solid black;\\n  padding: 10px;\\n  background-color: #4d0066;\\n  display: none;\\n}\\n\\n.register {\\n  grid-area: register;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n}\\n\\n.start-register {\\n  grid-area: start-register;\\n  margin-top: 1em;\\n  padding: 1.2em;\\n  background-color: #4d0066;\\n  color: white;\\n  font-weight: bold;\\n  transition: padding 0.5s;\\n  border-radius: 30px;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  margin-left: 7em;\\n  margin-right: 7em;\\n  max-width: 15em;\\n  justify-self: center;\\n\\n}\\n\\n.start-register:hover {\\n  padding: 1.8em;\\n} */\\n/*\\nfooter {\\n  grid-area: footer;\\n  grid-column-start: 1;\\n  grid-column-end: 5;\\n  background-color: #4d0066;\\n  color: white;\\n  margin-top: 4em;\\n}\\n\\nfooter > h2 {\\n  color: white;\\n  margin-left: 3em;\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main_grid_container\": \"Index_main_grid_container__2vVAu\",\n\t\"grid_item\": \"Index_grid_item__3QRZA\",\n\t\"section_welcome\": \"Index_section_welcome__1yzvd\",\n\t\"section_search\": \"Index_section_search__1aJk1\",\n\t\"section_register\": \"Index_section_register__3fs_C\",\n\t\"button_start_register\": \"Index_button_start_register__1hghn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3M/YjVjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsc0NBQXNDLGtCQUFrQixvSEFBb0gsNkJBQTZCLG9CQUFvQixxQkFBcUIsR0FBRyw2Q0FBNkMsbUJBQW1CLDRCQUE0QixHQUFHLG1DQUFtQyx1QkFBdUIsMkJBQTJCLHFDQUFxQyxHQUFHLGtDQUFrQyxzQkFBc0IsNkJBQTZCLHFDQUFxQyxHQUFHLG9DQUFvQyx3QkFBd0IsMkJBQTJCLEdBQUcseUNBQXlDLCtCQUErQiw4QkFBOEIsZUFBZSx5QkFBeUIsa0JBQWtCLHdCQUF3QixzQkFBc0IsaUJBQWlCLEdBQUcsbUJBQW1CLG1DQUFtQyxnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSxtQkFBbUIsbUJBQW1CLEdBQUcsMkJBQTJCLGtCQUFrQiw2Q0FBNkMscVJBQXFSLEdBQUcsa0JBQWtCLDJCQUEyQix5QkFBeUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsZ0JBQWdCLDhCQUE4QixLQUFLLGtCQUFrQiwyQkFBMkIseUJBQXlCLHVCQUF1QixvQkFBb0IsdUJBQXVCLGdCQUFnQiw4QkFBOEIsR0FBRyxnQkFBZ0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsZUFBZSxvQkFBb0IscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixxQkFBcUIsa0JBQWtCLHFCQUFxQixHQUFHLGNBQWMsdUJBQXVCLHlCQUF5Qix1QkFBdUIscUJBQXFCLHNCQUFzQixvQkFBb0IsR0FBRyxpQkFBaUIsMEJBQTBCLHlCQUF5Qix1QkFBdUIscUJBQXFCLHNCQUFzQixHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsZ0NBQWdDLDZCQUE2QixnQkFBZ0IsdUJBQXVCLDRCQUE0QixtQkFBbUIsZ0JB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c0IsNkJBQTZCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLHFCQUFxQixzQkFBc0Isb0JBQW9CLHlCQUF5QixLQUFLLDJCQUEyQixtQkFBbUIsR0FBRyxpQkFBaUIsc0JBQXNCLHlCQUF5Qix1QkFBdUIsOEJBQThCLGlCQUFpQixvQkFBb0IsR0FBRyxpQkFBaUIsaUJBQWlCLHFCQUFxQixHQUFHLHdCQUF3QjtBQUNybVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvSW5kZXgubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5JbmRleF9tYWluX2dyaWRfY29udGFpbmVyX18ydlZBdSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm5hdlxcXCJcXG4gICAgXFxcIndlbGNvbWVcXFwiXFxuICAgIFxcXCJzZWFyY2hcXFwiXFxuICAgIFxcXCJyZWdpc3RlclxcXCJcXG4gICAgXFxcInJlZ2lzdGVyLWJ1dHRvblxcXCJcXG59XFxuXFxuLkluZGV4X2dyaWRfaXRlbV9fM1FSWkEge1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLkluZGV4X21haW5fZ3JpZF9jb250YWluZXJfXzJ2VkF1ID4gbmF2IHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5JbmRleF9zZWN0aW9uX3dlbGNvbWVfXzF5enZkIHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRkMDA2NjtcXG59XFxuXFxuLkluZGV4X3NlY3Rpb25fc2VhcmNoX18xYUprMSB7XFxuICBncmlkLWFyZWE6IHNlYXJjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGQwMDY2O1xcbn1cXG5cXG4uSW5kZXhfc2VjdGlvbl9yZWdpc3Rlcl9fM2ZzX0Mge1xcbiAgZ3JpZC1hcmVhOiByZWdpc3RlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi5JbmRleF9idXR0b25fc3RhcnRfcmVnaXN0ZXJfXzFoZ2huIHtcXG4gIGdyaWQtYXJlYTogcmVnaXN0ZXItYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkMDA2NjtcXG4gIHdpZHRoOiAyMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuMiU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbnAsIG9sIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogIzRkMDA2NjtcXG59ICovXFxuXFxuLyogLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC4yZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbmF2XFxcIlxcbiAgICBcXFwid2VsY29tZSB3ZWxjb21lXFxcIlxcbiAgICBcXFwiZGl2aWRlci1vbmUgZGl2aWRlci1vbmVcXFwiXFxuICAgIFxcXCJzZWFyY2gtYmFyIHNlYXJjaC1iYXJcXFwiXFxuICAgIFxcXCJkaXZpZGVyLXR3byBkaXZpZGVyLXR3b1xcXCJcXG4gICAgXFxcInJlZ2lzdGVyIGF0dGVudGlvblxcXCJcXG4gICAgXFxcInN0YXJ0LXJlZ2lzdGVyIHN0YXJ0LXJlZ2lzdGVyXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5kaXZpZGVyLW9uZSB7XFxuICBncmlkLWFyZWE6IGRpdmlkZXItb25lO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZDAwNjY7XFxuXFxufVxcblxcbi5kaXZpZGVyLXR3byB7XFxuICBncmlkLWFyZWE6IGRpdmlkZXItdHdvO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ZDAwNjY7XFxufVxcblxcblxcblxcbi8qIG5hdiB7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiA3ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDdlbTtcXG59ICAqL1xcblxcbi8qIC50aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogM2VtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDdlbTtcXG4gIG1hcmdpbi1yaWdodDogN2VtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBncmlkLWFyZWE6IHNlYXJjaC1iYXI7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA3ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDdlbTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LXN0cmV0Y2gge1xcbiAgZmxleC1ncm93OiAwO1xcbn1cXG5cXG4uc2VhcmNoLWJhciA+IGZvcm0gPiBpbnB1dCB7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXM7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogMjVlbTtcXG59XFxuXFxuLnNlYXJjaC1iYXIgPiBmb3JtID4gYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDAwNjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYWR2YW5jZWQtc2VhcmNoIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxufVxcblxcbi5hdHRlbnRpb24ge1xcbiAgZ3JpZC1hcmVhOiBhdHRlbnRpb247XFxuICBncmlkLWNvbHVtbi1zdGFydDogNDtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgbWFyZ2luLXJpZ2h0OiA3ZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQwMDY2O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJlZ2lzdGVyIHtcXG4gIGdyaWQtYXJlYTogcmVnaXN0ZXI7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA3ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDdlbTtcXG59XFxuXFxuLnN0YXJ0LXJlZ2lzdGVyIHtcXG4gIGdyaWQtYXJlYTogc3RhcnQtcmVnaXN0ZXI7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDAwNjY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cztcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA3ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDdlbTtcXG4gIG1heC13aWR0aDogMTVlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG4uc3RhcnQtcmVnaXN0ZXI6aG92ZXIge1xcbiAgcGFkZGluZzogMS44ZW07XFxufSAqL1xcbi8qXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQwMDY2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogNGVtO1xcbn1cXG5cXG5mb290ZXIgPiBoMiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogM2VtO1xcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2I7Ozs7OztBQU1GOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Q0k7O0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRHRztBQUNIOzs7Ozs7Ozs7Ozs7O0dBYUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5fZ3JpZF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYXZcXFwiXFxuICAgIFxcXCJ3ZWxjb21lXFxcIlxcbiAgICBcXFwic2VhcmNoXFxcIlxcbiAgICBcXFwicmVnaXN0ZXJcXFwiXFxuICAgIFxcXCJyZWdpc3Rlci1idXR0b25cXFwiXFxufVxcblxcbi5ncmlkX2l0ZW0ge1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXG59XFxuXFxuLm1haW5fZ3JpZF9jb250YWluZXIgPiBuYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNlY3Rpb25fd2VsY29tZSB7XFxuICBncmlkLWFyZWE6IHdlbGNvbWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0ZDAwNjY7XFxufVxcblxcbi5zZWN0aW9uX3NlYXJjaCB7XFxuICBncmlkLWFyZWE6IHNlYXJjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGQwMDY2O1xcbn1cXG5cXG4uc2VjdGlvbl9yZWdpc3RlciB7XFxuICBncmlkLWFyZWE6IHJlZ2lzdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuLmJ1dHRvbl9zdGFydF9yZWdpc3RlciB7XFxuICBncmlkLWFyZWE6IHJlZ2lzdGVyLWJ1dHRvbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDAwNjY7XFxuICB3aWR0aDogMjAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjIlO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBodG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5wLCBvbCB7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICM0ZDAwNjY7XFxufSAqL1xcblxcbi8qIC5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG5hdlxcXCJcXG4gICAgXFxcIndlbGNvbWUgd2VsY29tZVxcXCJcXG4gICAgXFxcImRpdmlkZXItb25lIGRpdmlkZXItb25lXFxcIlxcbiAgICBcXFwic2VhcmNoLWJhciBzZWFyY2gtYmFyXFxcIlxcbiAgICBcXFwiZGl2aWRlci10d28gZGl2aWRlci10d29cXFwiXFxuICAgIFxcXCJyZWdpc3RlciBhdHRlbnRpb25cXFwiXFxuICAgIFxcXCJzdGFydC1yZWdpc3RlciBzdGFydC1yZWdpc3RlclxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uZGl2aWRlci1vbmUge1xcbiAgZ3JpZC1hcmVhOiBkaXZpZGVyLW9uZTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGQwMDY2O1xcblxcbn1cXG5cXG4uZGl2aWRlci10d28ge1xcbiAgZ3JpZC1hcmVhOiBkaXZpZGVyLXR3bztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNGQwMDY2O1xcbn1cXG5cXG5cXG5cXG4vKiBuYXYge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBtYXJnaW4tbGVmdDogN2VtO1xcbiAgbWFyZ2luLXJpZ2h0OiA3ZW07XFxufSAgKi9cXG5cXG4vKiAudGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDNlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBncmlkLWFyZWE6IHdlbGNvbWU7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA3ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDdlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgZ3JpZC1hcmVhOiBzZWFyY2gtYmFyO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBtYXJnaW4tbGVmdDogN2VtO1xcbiAgbWFyZ2luLXJpZ2h0OiA3ZW07XFxufVxcblxcbi5zZWFyY2gtYmFyID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1zdHJldGNoIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuXFxuLnNlYXJjaC1iYXIgPiBmb3JtID4gaW5wdXQge1xcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzO1xcbiAgcGFkZGluZzogMSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgd2lkdGg6IDI1ZW07XFxufVxcblxcbi5zZWFyY2gtYmFyID4gZm9ybSA+IGJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXM7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQwMDY2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWFyY2gtYmFyID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmFkdmFuY2VkLXNlYXJjaCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG5cXG4uYXR0ZW50aW9uIHtcXG4gIGdyaWQtYXJlYTogYXR0ZW50aW9uO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIG1hcmdpbi1yaWdodDogN2VtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkMDA2NjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yZWdpc3RlciB7XFxuICBncmlkLWFyZWE6IHJlZ2lzdGVyO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBtYXJnaW4tbGVmdDogN2VtO1xcbiAgbWFyZ2luLXJpZ2h0OiA3ZW07XFxufVxcblxcbi5zdGFydC1yZWdpc3RlciB7XFxuICBncmlkLWFyZWE6IHN0YXJ0LXJlZ2lzdGVyO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQwMDY2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXM7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBtYXJnaW4tbGVmdDogN2VtO1xcbiAgbWFyZ2luLXJpZ2h0OiA3ZW07XFxuICBtYXgtd2lkdGg6IDE1ZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnN0YXJ0LXJlZ2lzdGVyOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDEuOGVtO1xcbn0gKi9cXG4vKlxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkMDA2NjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDRlbTtcXG59XFxuXFxuZm9vdGVyID4gaDIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDNlbTtcXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbl9ncmlkX2NvbnRhaW5lclwiOiBcIkluZGV4X21haW5fZ3JpZF9jb250YWluZXJfXzJ2VkF1XCIsXG5cdFwiZ3JpZF9pdGVtXCI6IFwiSW5kZXhfZ3JpZF9pdGVtX18zUVJaQVwiLFxuXHRcInNlY3Rpb25fd2VsY29tZVwiOiBcIkluZGV4X3NlY3Rpb25fd2VsY29tZV9fMXl6dmRcIixcblx0XCJzZWN0aW9uX3NlYXJjaFwiOiBcIkluZGV4X3NlY3Rpb25fc2VhcmNoX18xYUprMVwiLFxuXHRcInNlY3Rpb25fcmVnaXN0ZXJcIjogXCJJbmRleF9zZWN0aW9uX3JlZ2lzdGVyX18zZnNfQ1wiLFxuXHRcImJ1dHRvbl9zdGFydF9yZWdpc3RlclwiOiBcIkluZGV4X2J1dHRvbl9zdGFydF9yZWdpc3Rlcl9fMWhnaG5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Index.module.css\n");

/***/ })

})