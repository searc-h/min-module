import { Module } from "./interface";
export declare const traverseModule: (module: Module) => Module<Record<string, unknown>>[];
export declare const forRoot: <T>(module: Module, data: T) => Module<Record<string, unknown>>;
