import { createContext, FC, useMemo } from "react";

import { Module } from "@min-module/core";

export type ModuleType = Map<
  Module,
  {
    options?: Record<string, unknown>;
  }
>;

interface ContextProps {
  modules: ModuleType;
}

const DataContext = createContext({} as ContextProps);

interface PropsType {
  modules: ModuleType;
  children: JSX.Element;
}

const DataProvider: FC<PropsType> = props => {
  const { modules, children } = props;

  const data = useMemo(() => {
    return {
      modules,
    } as ContextProps;
  }, [modules]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
