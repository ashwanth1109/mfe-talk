const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      // where webpack will output assets relative to root
      publicPath: "http://localhost:3000/",
      // can use hash, contenthash or chunkhash
      // helpful to implement long term caching on the browser
      filename: "[name].[contenthash].js",
    },
    devServer: {
      // the port number that the dev server should serve on
      port: 3000,
      historyApiFallback: {
        // serve index.html page (in / route) in place of any 404 response (when using the HTML5 history API)
        index: "/",
      },
    },
    plugins: [
      // TODO: add the webpack module federation plugin for container
    ],
  };

  // Dev config -> merge of dev + common (dev overrides common)
  return merge(commonConfig, devConfig);
};
