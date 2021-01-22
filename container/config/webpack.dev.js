const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      // where webpack will output assets relative to root
      publicPath: "/",
      // can use hash, contenthash or chunkhash
      // helpful to implement long term caching on the browser
      filename: "[name].[contenthash].js",
    },
    devServer: {
      // the port number that the dev server should serve on
      port: 8000,
      // serve index.html page in place of any 404 response (when using the HTML5 history API)
      historyApiFallback: true,
    },
    plugins: [
      // TODO: add the webpack module federation plugin for MFE
    ],
  };

  // Dev config -> merge of dev + common (dev overrides common)
  return merge(commonConfig, devConfig);
};
