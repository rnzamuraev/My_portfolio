import calcScroll from "./calcScroll.js";

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  menuLink = document.querySelectorAll(".menu__link"),
  overflow = document.body,
  scrolling = calcScroll();

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
