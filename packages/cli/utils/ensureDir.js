import fs from "fs-extra";
import { isCover } from "./isCover.js";

/**
 * @description 确保目录是正常，如果有相同名字的，则向用户询问是否覆盖
 * @description 若覆盖，则执行覆盖操作并返回true；若不覆盖，则返回false
 */
export const ensureDir = async (path, options) => {
  try {
    // 判断当前目录下有没有用户创建的同名的目录
    if (await fs.pathExists(path)) {
      const { action } = await isCover("directory"); // 提示用户是否确定要覆盖
      if (!action) return false;
      console.log("removing...");
      await fs.emptyDir(path);
      successLog(" 💫 remove success!!!");
    } else {
      await fs.ensureDir(path);
    }
    return true;
  } catch (err) {
    console.log("something error!!!");
    return false;
  }
};
