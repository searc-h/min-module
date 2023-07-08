import { FactoryOptions, Middleware, Module } from "./interface";
import { compose } from "./utils";
import { traverseModule, forRoot } from "./module";

export const createFactory = (appModule: Module, options?: FactoryOptions) => {
  const middleware: Middleware[] =
    Reflect.get(options as object, "middleware") || [];
  const res = compose(middleware, appModule);

  return res;
};

export { traverseModule, forRoot };
