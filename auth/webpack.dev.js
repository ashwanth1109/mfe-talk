const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8083/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 8083,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "auth",
        filename: "remoteEntry.js",
        exposes: {
          "./AuthPage": "./src/bootstrap",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
