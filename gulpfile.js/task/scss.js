const { src, dest } = require("gulp");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sizefile = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");
const gulpIf = require("gulp-if");

// Обработка scss
const scss = () => {
  return (
    src(path.scss.src, { sourcemaps: app.isDev })
      // плагин
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "scss",
            message: error.message,
          })),
        })
      )
      .pipe(sassGlob())
      .pipe(
        sass({ outputStyle: "compressed" }).on(
          "error",
          sass.logError
        )
      )
      // .pipe(sass())
      .pipe(webpCss())
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(groupCssMediaQueries())
      .pipe(
        gulpIf(app.isProd, sizefile({ title: "до сжатия" }))
      )
      .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(csso())
      .pipe(
        gulpIf(
          app.isProd,
          sizefile({ title: "после сжатия" })
        )
      )
      // плагин
      .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
  );
};

module.exports = scss;
