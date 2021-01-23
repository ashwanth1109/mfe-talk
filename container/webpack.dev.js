const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8080/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 8080,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [],
  };

  return merge(commonConfig, devConfig);
};
