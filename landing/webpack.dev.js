const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8082/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 8082,
      historyApiFallback: {
        index: "index.html",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "landing",
        filename: "remoteEntry.js",
        exposes: {
          "./LandingPage": "./src/bootstrap",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
