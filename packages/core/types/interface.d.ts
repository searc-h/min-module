import React from 'react';
export interface SystemOptions {
    forRoot?: boolean;
    module?: Module;
}
export interface ModuleOptions {
    namespace?: string;
    title?: string;
    data?: any;
}
export interface PropsType {
    [k: string]: unknown;
    modules: Module[];
}
export type Middleware = (module: Module, app: JSX.Element) => JSX.Element;
export type FactoryOptions = {
    middleware: Middleware[];
};
export interface Module<T = Record<string, unknown>> {
    _system?: SystemOptions;
    imports?: Module[];
    options?: ModuleOptions & T;
    locale?: {
        type: string;
        content: Record<string, string>;
    }[];
    render?: React.FunctionComponentElement<PropsType>;
    models?: unknown[];
}
