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
