import { Middleware, Module, traverseModule } from "@min-module/core";

import { DataContext, DataProvider, ModuleType } from "./context";
import { Lifecycle } from "./lifecycle";

export const renderData: Middleware = (module, children) => {
  const moduleData = generateConfig(module);

  return <DataProvider modules={moduleData}>{children}</DataProvider>;
};

const generateConfig = (module: Module) => {
  const config: ModuleType = new Map();

  traverseModule(module).forEach(item => {
    const current = item._system?.module || item;

    if (!item._system) {
      item._system = {};
    }

    if (item._system.forRoot) {
      const render = item.render;

      item.render = <Lifecycle module={item}>{render}</Lifecycle>;
    }

    config.set(current, {
      options: current.options,
    });
  });

  return config;
};

export { DataContext };
