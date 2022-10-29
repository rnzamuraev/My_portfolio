const { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
// const fileinclude = require("gulp-file-include");
// const htmlmin = require("gulp-htmlmin");
const sizefile = require("gulp-size");
// const webpHtml = require("gulp-webp-html");

// Обработка html
const sendMail = () => {
  return (
    src(path.php.src)
      // плагин
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "mail",
            message: error.message,
          })),
        })
      )
      // .pipe(fileinclude())
      // .pipe(webpHtml())
      .pipe(sizefile({ title: "до сжатия" }))
      // .pipe(htmlmin(app.htmlmin))
      .pipe(sizefile({ title: "после сжатия" }))
      // плагин
      .pipe(dest(path.php.dest))
  );
};

module.exports = sendMail;
