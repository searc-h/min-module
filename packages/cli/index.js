#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
import { program } from "commander";
import { add } from "./command/add.js";
/**  @description 添加 page */
program
  .command("addModule <module-name>")
  .description("add module from template")
  .action(moduleName => {
    add(moduleName);
  });

program
  .command("version")
  .description("watch the version of min-cli")
  .action(() => {
    console.log("1.0.0");
  });

program.parse(process.argv);
