import React from "react";

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
  _system?: SystemOptions; // 系统内置变量

  imports?: Module[];
  options?: ModuleOptions & T; // 合并全部变量到options 中
  locale?: { type: string; content: Record<string, string> }[];
  render?: React.FunctionComponentElement<PropsType>;
  models?: unknown[];
}
