const del = require("del");

// Конфигурации
const path = require("../config/path.js");
const app = require("../config/app.js");

//Удаление директории(папки)
const clear = () => {
  return del(path.root);
};

module.exports = clear;
