const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:3001/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 3001,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [
      // TODO: add the webpack module federation plugin for header
      new ModuleFederationPlugin({
        name: "header",
        filename: "remoteEntry.js",
        exposes: {
          "./HeaderComponent": "./src/bootstrap",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
