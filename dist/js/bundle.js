/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/calcScroll.js":
/*!************************************!*\
  !*** ./src/js/parts/calcScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcScroll() {
  const div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  return scrollWidth;
}

/* harmony default export */ __webpack_exports__["default"] = (calcScroll);


/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll.js */ "./src/js/parts/calcScroll.js");


const form = document.querySelector("#contacts__form");
// const button = form.querySelector("#contacts__btn");
const messageSent = document.querySelector(
  ".contacts__message"
);
const overflow = document.body;
const scrolling = (0,_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const messageTitle = document.querySelector(
  ".contact__message-title"
);
const closeMessageSent = document.querySelector(
  ".contacts__message-close"
);

const inputArr = form.querySelectorAll("input");
const validInputArr = [];

inputArr.forEach((input) => {
  if (input.hasAttribute("data-reg")) {
    input.setAttribute("is-valid", "0");
    validInputArr.push(input);
  }
});

form.addEventListener("input", inputHandler);

form.addEventListener("submit", formCheck);

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

  const label = elem.nextElementSibling;
  const span = label.nextElementSibling;

  if (reg.test(inputValue)) {
    elem.setAttribute("is-valid", "1");
    span.innerHTML = "";
  } else {
    span.innerHTML = "Поле заполнено не верно";
    elem.setAttribute("is-valid", "0");
    if (inputValue === "") {
      span.innerHTML = "";
    }
  }
}

function formCheck(e) {
  e.preventDefault();

  const isAllValid = [];

  validInputArr.forEach((input) => {
    isAllValid.push(input.getAttribute("is-valid"));
  });

  const isValid = isAllValid.reduce((acc, current) => {
    return acc * current;
  });
  console.log(isValid);

  if (Boolean(Number(isValid))) {
    formSubmit();
    return;
  }
}

async function formSubmit() {
  let data = formData(form);
  console.log(data);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Отправлено");
        formReset();
        showMessage("Данные отправлены!");
      }
    }
  };

  // xhr.open("POST", "mail.php", true);
  xhr.open("POST", "send_mail.php", true);
  xhr.send(data);
}

function formData(form) {
  return new FormData(form);
}

function formReset() {
  form.reset();
}

// function showMessage(message) {
function showMessage() {
  messageSent.style.display = "flex";
  overflow.style.overflow = "hidden";
  overflow.style.paddingRight = `${scrolling}px`;
  // messageTitle.innerHTML = message;
}

closeMessageSent.addEventListener("click", closeMessage);

function closeMessage() {
  messageSent.style.display = "none";
  overflow.style.overflow = "";
  overflow.style.paddingRight = `0px`;
}


/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll.js */ "./src/js/parts/calcScroll.js");


const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  menuLink = document.querySelectorAll(".menu__link"),
  overflow = document.body,
  scrolling = (0,_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  overflow.style.overflow = "hidden";
  overflow.style.paddingRight = `${scrolling}px`;
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
  overflow.style.overflow = "";
  overflow.style.paddingRight = `0px`;
});

// menuLink.addEventListener("click", () => {
//   menu.classList.remove("active");
// });
menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overflow.style.overflow = "";
    overflow.style.paddingRight = `0px`;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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