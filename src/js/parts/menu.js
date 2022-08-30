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
