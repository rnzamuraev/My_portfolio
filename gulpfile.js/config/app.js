const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,

  isDev: isDev,

  htmlmin: { collapseWhitespace: isProd },

  pug: {
    pretty: isDev, // отвечает за сжатие фаилов - отключено
    // data: {
    //   news: require("../data/news.json"),
    // },
  },

  webpack: {
    // mode: "development",
    mode: isProd ? "production" : "development",
    entry: "./src/js/script.js",
    output: {
      filename: "bundle.js",
      // path: __dirname + "/dist/js",
    },
    // watch: true,

    devtool: "source-map",

    //   module: {
    //     rules: [
    //       {
    //         test: /\.js$/,
    //         exclude: /(node_modules|bower_components)/,
    //         use: {
    //           loader: "babel-loader?optional[]=runtime",
    //           options: {
    //             presets: [
    //               [
    //                 "@babel/env",
    //                 {
    //                   targets: {
    //                     edge: "17",
    //                     firefox: "60",
    //                     chrome: "67",
    //                     safari: "11.1",
    //                     ie: "11",
    //                   },
    //                 },
    //               ],
    //             ],
    //             plugins: ["es6-promise"],
    //           },
    //         },
    //       },
    //     ],
    //   },
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
};
