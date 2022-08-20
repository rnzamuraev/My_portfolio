const { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

// Обработка img
const img = () => {
  return (
    src(path.img.src)
      // плагин
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "img",
            message: error.message,
          })),
        })
      )
      .pipe(newer(path.img.dest))
      .pipe(webp())
      .pipe(dest(path.img.dest))
      .pipe(src(path.img.src))
      .pipe(newer(path.img.dest))
      .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
      // плагин
      .pipe(dest(path.img.dest))
  );
};

module.exports = img;
