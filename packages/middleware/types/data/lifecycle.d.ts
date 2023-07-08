import React, { PropsWithChildren } from "react";
import { Module } from "@min-module/core";
interface PropsType {
    module: Module;
    modules?: Module[];
}
export declare const Lifecycle: React.FC<PropsWithChildren<PropsType>>;
export declare const useModuleData: <T extends Record<string, unknown>>(module: Module) => [T, Module<Record<string, unknown>>];
export {};
