const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8081/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 8081,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [
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
