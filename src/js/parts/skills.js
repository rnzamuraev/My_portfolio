const percents = document.querySelectorAll(
    ".skills__ratings-percent"
  ),
  lines = document.querySelectorAll(
    ".skills__ratings-line span"
  );

percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
