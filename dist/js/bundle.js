/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ (function() {

const form = document.querySelector("#contacts__form");
const button = document.querySelector("#contacts__btn");

const inputArr = form.querySelectorAll("input");
const validInputArr = [];
// console.log(validInputArr);

inputArr.forEach((input) => {
  if (input.hasAttribute("data-reg")) {
    input.setAttribute("is-valid", "0");
    validInputArr.push(input);
    input.style.outline = "none";
  }
});
// console.log(validInputArr);

form.addEventListener("input", inputHandler);

button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  // проверяем поле input с необходимым атрибутом
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(elem) {
  const inputValue = elem.value;
  const inputReg = elem.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    elem.style.border = "solid 3px rgb(0, 290, 0)";
    // elem.style.outline = "none";
    elem.setAttribute("is-valid", "1");
    // elem.style.border = "solid 3px ffa501";
    // elem.style.outline = "solid 2px ffa501";
  } else {
    elem.style.border = "solid 3px rgb(250, 0, 0)";
    elem.setAttribute("is-valid", "0");
  }
}

function buttonHandler(e) {
  const isAllValid = [];
  // console.log(isAllValid);

  validInputArr.forEach((input) => {
    // if ("is-valid" === true) {
    // }
    isAllValid.push(input.getAttribute("is-valid"));
    console.log(isAllValid);
  });

  // const isValid = isAllValid.reduce((acc, current) => {
  //   return acc && current;
  // });
  const isValid = isAllValid.reduce((acc, current) => {
    return acc * current;
  });

  console.log(isValid);
  // function sum() {
  // isAllValid.forEach((elem) => {
  //   if (elem === 0) {
  //   }
  //   let a = elem * 1;
  // });
  // }

  if (!Boolean("isValid")) {
    e.preventDefault();
  }
}


/***/ }),

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
window.addEventListener("DOMContentLoaded", () => {
  const menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");
  const skill = __webpack_require__(/*! ./parts/skills.js */ "./src/js/parts/skills.js");
  const form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js");
});

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map