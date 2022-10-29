const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");

// Конфигурации
const path = require("./config/path.js");
const app = require("./config/app.js");

// Плагины

// Задачи
const clear = require("./task/clear.js");
// const pug = require("./task/pug.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");
const font = require("./task/font.js");
const mail = require("./task/mail.js");
const sendMail = require("./task/send_mail.js");

//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Наблюдение
const watcher = () => {
  // watch(path.pug.watch, pug).on("all", browserSync.reload);
  watch(path.html.watch, html).on(
    "all",
    browserSync.reload
  );
  watch(path.scss.watch, scss).on(
    "all",
    browserSync.reload
  );
  watch(path.js.watch, js).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on(
    "all",
    browserSync.reload
  );
  watch(path.php.watch, sendMail).on(
    "all",
    browserSync.reload
  );
};

const build = series(
  clear,
  // parallel(pug, scss, js, img, font)
  parallel(html, scss, js, img, font, sendMail, mail)
);

const dev = series(build, parallel(watcher, server));

// Задачи
// module.exports.font = font;
// module.exports.img = img;
// module.exports.js = js;
// module.exports.scss = scss;
// module.exports.pug = pug;
// module.exports.watch = watcher;
// module.exports.clear = clear;

// Сборка

exports.default = app.isProd ? build : dev;

// exports.dev = dev;
// exports.build = build;
