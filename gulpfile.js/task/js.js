const { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

// Обработка js
const js = () => {
  return (
    src(path.js.src, { sourcemaps: app.isDev })
      // плагин
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "javaScript",
            message: error.message,
          })),
        })
      )
      .pipe(babel())
      .pipe(webpack(app.webpack))
      // плагин
      .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
  );
};

module.exports = js;
