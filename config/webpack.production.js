const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "scripts/[name].[contenthash:5].bundule.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       drop_console: true
    //     },
    //     output: {
    //       comments: false
    //     }
    //   },
    //   parallel: true
    // }),
    new HtmlWebpackPlugin({
      title: "CRM系统",
      filename: "../views/index.html",
      template: path.resolve(__dirname, "../src/web/index.html"),
      inject: true,
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
};
