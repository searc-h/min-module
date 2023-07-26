import { fileURLToPath } from "url";
import path, { dirname } from "path";
import inquirer from "inquirer";
import fs from "fs-extra";
import { compile } from "../utils/complie.js";
import { ensureDir } from "../utils/ensureDir.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const add = async moduleName => {
  const dirName = path.resolve(process.cwd(), `${moduleName}`);
  if (!(await ensureDir(dirName))) return;
  await fs.ensureDir(dirName + "/constant");
  await fs.promises.copyFile(
    path.resolve(__dirname, "../templates/constant/index.ts"),
    dirName + "/constant/index.ts"
  );
  await fs.ensureDir(dirName + "/content");
  await fs.promises.copyFile(
    path.resolve(__dirname, "../templates/content/index.tsx"),
    dirName + "/content/index.tsx"
  );
  await fs.ensureDir(dirName + "/interface");
  await fs.promises.copyFile(
    path.resolve(__dirname, "../templates/interface/index.ts"),
    dirName + "/interface/index.ts"
  );
  let { action: isLocale } = await inquirer.prompt([
    // 配置询问的方式
    {
      name: "action",
      type: "list",
      message: `是否需要国际化配置`,
      choices: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    },
  ]);
  if (isLocale) {
    await fs.ensureDir(dirName + "/locale");
    await fs.promises.copyFile(
      path.resolve(__dirname, "../templates/locale/index.ts"),
      dirName + "/locale/index.ts"
    );
  }

  let { action: isService } = await inquirer.prompt([
    // 配置询问的方式
    {
      name: "action",
      type: "list",
      message: `是否需要yuan Service服务配置`,
      choices: [
        { name: "Yes", value: true },
        { name: "No", value: false },
      ],
    },
  ]);
  if (isService) {
    await fs.ensureDir(dirName + "/service");
    await fs.promises.copyFile(
      path.resolve(__dirname, "../templates/service/index.ts"),
      dirName + "/service/index.ts"
    );
    // await fs.promises.copyFile(
    //   path.resolve(__dirname, "../templates/service/example.ts"),
    //   dirName + "/service/example.ts"
    // );
  }
  const tsx = await compile(path.resolve(__dirname, "../templates/index.ejs"), {
    name: moduleName[0].toLocaleUpperCase() + moduleName.slice(1),
    namespace: moduleName,
    isLocale,
    isService,
  });
  await fs.promises.appendFile(dirName + "/index.tsx", tsx);
};
