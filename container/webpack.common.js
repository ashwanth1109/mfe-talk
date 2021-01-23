const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // starting point of application, and here webpack starts bundling
  entry: "./index",
  // options for resolving module requests
  resolve: {
    // extensions that are allowed when resolving modules (in order)
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // directories where to look for modules (in order)
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  // configuration regarding modules
  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: [
      {
        // Conditions:
        test: /\.tsx?$/,
        // package allows transpiling JavaScript files using Babel and webpack.
        loader: "babel-loader",
        // exclude babel-loader from transpiling files from node_modules
        exclude: /node_modules/,
        options: {
          // preset - an assembly of pre-existing set of plugins
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  // plugins that extend webpack core functionality
  plugins: [
    // simplifies creation of HTML files to serve your webpack bundles.
    // useful for webpack bundles that include a hash in the filename.
    new HtmlWebpackPlugin({
      // supply base template for plugin to generate HTML from
      template: "./index.html",
    }),
  ],
};
