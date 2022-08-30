/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/***/ (function() {

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  menuLink = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

// menuLink.addEventListener("click", () => {
//   menu.classList.remove("active");
// });
menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});


/***/ }),

/***/ "./src/js/parts/skills.js":
/*!********************************!*\
  !*** ./src/js/parts/skills.js ***!
  \********************************/
/***/ (function() {

const percents = document.querySelectorAll(
    ".skills__ratings-percent"
  ),
  lines = document.querySelectorAll(
    ".skills__ratings-line span"
  );

percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");
const skill = __webpack_require__(/*! ./parts/skills.js */ "./src/js/parts/skills.js");

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map