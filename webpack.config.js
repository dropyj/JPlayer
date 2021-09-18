// 导入处理路径的模块
var path = require("path");
// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require("html-webpack-plugin");
//导入vue文件处理模块
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"), // 项目入口文件
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "jplayer.min.js",
    library: "JPlayer",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
