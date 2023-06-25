const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const args = process.argv.slice(2);

// 遍历packages下面的包
const mapPackages = (
  packagesPath = "../packages",
  packageWebpackConfig = {}
) => {
  const packages = fs.readdirSync(path.resolve(__dirname, packagesPath));

  packages.forEach((item) => {
    let packagePath = path.resolve(__dirname, packagesPath, item);

    try {
      const package = require(path.resolve(packagePath, "package.json"));

      const { name, noWebpack } = package;
      if (noWebpack) return;
      packageWebpackConfig[item] = {
        path: packagePath,
        name,
      };
    } catch (error) {
      mapPackages(packagePath, packageWebpackConfig);
    }
  });
  return packageWebpackConfig;
};

function build(configs) {
  console.log(configs)
  // 遍历执行配置项
  configs.forEach((config) => {
    webpack(webpackConfig(config), (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(
        stats.toString({
          chunks: false, // 使构建过程更静默无输出
          colors: true, // 在控制台展示颜色
        })
      );
      if (stats.hasErrors()) {
        return;
      }
      console.log(`${config.name} build successed!`);
    });
  });
}

console.log("\n===> running build");

// 执行所有配置

const configs = Object.values(mapPackages());
const buildConfig = args.length
  ? configs.filter((item) =>
      args.some((ele) => new RegExp(ele).test(item.name))
    )
  : configs;
console.log('BUILD ...')
build(buildConfig);