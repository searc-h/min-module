import React, {
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
} from "react";

import { Module } from "@min-module/core";

import { DataContext, ModuleType } from "./context";

interface PropsType {
  module: Module;
  modules?: Module[];
}
export const Lifecycle: React.FC<PropsWithChildren<PropsType>> = props => {
  const { module, children, ...restProps } = props;

  const { modules } = useContext(DataContext);

  const contextValue = useMemo(() => {
    const newModules: ModuleType = new Map(modules);

    const moduleData = {
      options: module.options,
    };

    const current = module?._system?.module || module;

    newModules?.set(current, moduleData);

    return { modules: newModules };
  }, [module, modules]);

  const childrenNode = useMemo(
    () => React.cloneElement(children as ReactElement, restProps),
    [children, restProps]
  );

  return (
    <DataContext.Provider value={contextValue}>
      {childrenNode}
    </DataContext.Provider>
  );
};

export const useModuleData = <T extends Record<string, unknown>>(
  module: Module
) => {
  const { modules } = useContext(DataContext);

  const moduleData = modules?.get(module);

  return [moduleData?.options] as [T];
};
