module.exports = {
  mode: "production",
  entry: "./webpack/index.js",
  output: {
    path: __dirname + "/assets/javascripts/",
    filename: "bundle.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: __dirname + "/webpack/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: __dirname + "/webpack/",
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
};
