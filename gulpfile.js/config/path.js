const srcPath = "./src";
const distPath = "./dist";

module.exports = {
  root: distPath,

  html: {
    src: `${srcPath}/html/*.html`,
    watch: `${srcPath}/html/**/*.html`,
    dest: distPath,
  },
  // html: {
  //   src: `${srcPath}/pug/*.html`,
  //   watch: `${srcPath}/pug/**/*.html`,
  //   dest: distPath,
  // },

  pug: {
    src: `${srcPath}/pug/*.pug`,
    watch: `${srcPath}/pug/**/*.pug`,
    dest: distPath,
  },

  css: {
    src: `${srcPath}/css/*.css`,
    watch: `${srcPath}/css/**/*.css`,
    dest: `${distPath}/css`,
  },

  scss: {
    src: `${srcPath}/sass/*.+(scss|sass|css)`,
    watch: `${srcPath}/+(sass|scss)/**/*.+(sass|scss|css)`,
    dest: `${distPath}/css`,
  },

  js: {
    src: `${srcPath}/js/*.js`,
    watch: `${srcPath}/js/**/*.js`,
    dest: `${distPath}/js`,
  },

  img: {
    src: `${srcPath}/img/**/*.+(jpg|png|jpeg|gif|svg)`,
    watch: `${srcPath}/img/**/*.+(jpg|png|jpeg|gif|svg)`,
    dest: `${distPath}/img`,
  },

  font: {
    src: `${srcPath}/font/*.+(eot|ttf|otf|otc|ttc|woff|woff2|svg)`,
    watch: `${srcPath}/font/**/*.+(eot|ttf|otf|otc|ttc|woff|woff2|svg)`,
    dest: `${distPath}/font`,
  },
};
