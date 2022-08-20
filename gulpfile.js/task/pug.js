const { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");
const webpHtml = require("gulp-webp-html");

// Обработка pug
const pug = () => {
  return (
    src(path.pug.src)
      // плагин
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "pug",
            message: error.message,
          })),
        })
      )
      .pipe(pugs(app.pug))
      .pipe(webpHtml())
      // плагин
      .pipe(dest(path.pug.dest))
  );
};

module.exports = pug;
