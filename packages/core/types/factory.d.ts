import { FactoryOptions, Module } from './interface';
import { traverseModule, forRoot } from './module';
export declare const createFactory: (appModule: Module, options?: FactoryOptions) => JSX.Element;
export { traverseModule, forRoot };
