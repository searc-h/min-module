const path = require("path");

module.exports = (opt)=>(
  {
    mode: "production",
    entry: path.resolve(opt.path, "./src"),
    output: {
      filename: "index.js",
      path: path.resolve(opt.path, "./lib"),
      clean: true,
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: ["babel-loader", "ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: "[local]-[hash:base64:6]",
                },
              },
            },
            "postcss-loader",
            "less-loader",
          ],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
            },
          ],
        },
        {
          test: /\.(png|jpg|svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 1024 * 1024,
              },
            },
          ],
        },
      ],
    },
    // plugins: [new BundleAnalyzerPlugin()],
    resolve: {
      extensions: [".ts", ".tsx", "..."],
    },
    externals: [
      "react",
      "react-dom",
      "react-router-dom",
      "antd",
      "@ant-design/icons",
    ],
    optimization: {
      usedExports: true,
    },
  }
)