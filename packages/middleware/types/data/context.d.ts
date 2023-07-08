import { FC } from 'react';
import { Module } from '@min-module/core';
type ModuleType = Map<Module, {
    module?: Module;
    options?: Record<string, unknown>;
}>;
interface ContextProps {
    modules: ModuleType;
}
declare const DataContext: import("react").Context<ContextProps>;
interface PropsType {
    modules: ModuleType;
    children: JSX.Element;
}
declare const DataProvider: FC<PropsType>;
export { DataContext, DataProvider };
