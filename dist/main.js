/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("module");

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module */ "module");

const require = (0,module__WEBPACK_IMPORTED_MODULE_0__.createRequire)("file:///C:/Users/NoriakiOtsuka2020/Documents/TechTrain/railway/react-kiso4/railway-ts-app/server/index.js");
const app = require('express')();
const port = 9000;
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/api', (req, res) => {
  res.json({
    message: "Hello World"
  });
});
app.listen(port, () => {
  console.log("listening on *:".concat(port));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDO0FBRXZDLE1BQU1DLE9BQU8sR0FBR0QscURBQWEsQ0FBQ0UsMkdBQWUsQ0FBQztBQUM5QyxNQUFNRyxHQUFHLEdBQUdKLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLE1BQU1LLElBQUksR0FBRyxJQUFJO0FBRWpCRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDekJBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFRkwsR0FBRyxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQzVCQSxHQUFHLENBQUNFLElBQUksQ0FBQztJQUFDQyxPQUFPLEVBQUU7RUFBYSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUZQLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDUCxJQUFJLEVBQUUsTUFBTTtFQUNyQlEsT0FBTyxDQUFDQyxHQUFHLG1CQUFBQyxNQUFBLENBQW1CVixJQUFJLENBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhaWx3YXktdHMtYXBwL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJtb2R1bGVcIiIsIndlYnBhY2s6Ly9yYWlsd2F5LXRzLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yYWlsd2F5LXRzLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JhaWx3YXktdHMtYXBwLy4vc2VydmVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vZHVsZVwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gXCJtb2R1bGVcIjtcclxuXHJcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IGFwcCA9IHJlcXVpcmUoJ2V4cHJlc3MnKSgpO1xyXG5jb25zdCBwb3J0ID0gOTAwMDtcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICByZXMuc2VuZCgnSGVsbG8gV29ybGQnKTtcclxufSlcclxuXHJcbmFwcC5nZXQoJy9hcGknLCAocmVxLCByZXMpID0+IHtcclxuICByZXMuanNvbih7bWVzc2FnZTogXCJIZWxsbyBXb3JsZFwifSk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiAqOiR7cG9ydH1gKTtcclxufSlcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVJlcXVpcmUiLCJyZXF1aXJlIiwiaW1wb3J0IiwibWV0YSIsInVybCIsImFwcCIsInBvcnQiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kIiwianNvbiIsIm1lc3NhZ2UiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==