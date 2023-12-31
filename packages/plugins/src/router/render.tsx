import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Middleware, Module } from "@min-module/core";

export const renderRouter: Middleware = (
  module: Module,
  children: JSX.Element
) => {
  const render = createRender(module);
  return (
    <BrowserRouter basename={module.options?.routePath}>
      {render?.render || children}
    </BrowserRouter>
  );
};

/**
 *
 * @param module
 * @description 递归整个Module树结构，给render添加props
 */
const createRender = (module: Module) => {
  const moduleRender = module.render;
  // 没有render的模块直接返回模块本身【结束本次递归】
  if (!moduleRender) return module;

  // 有render的模块，获取其imports中的所有模块
  const modules: Module[] = Reflect.get(module, "imports") || [];

  const routes = modules
    // imports中的所有模块【递归】进行路由信息注入，递归结束代表子模块已经注入完毕
    .map(module => createRender(module))
    // 过滤没有render的模块
    .filter(item => item.render);

  const defaultRoute = module.options?.defaultRoute;

  const defaultRoutes = (
    <Routes>
      {routes?.map(item => {
        return (
          <Route
            key={item.options?.routePath}
            element={item.render}
            path={item.options?.routePath + "*"}
          />
        );
      })}
      {defaultRoute}
    </Routes>
  );
  // 把子级模块注入本模块render的props中
  module.render = React.cloneElement(moduleRender, {
    modules: routes,
    defaultRoutes,
    defaultRoute,
  });

  // 返回已经注入props的本模块【结束本次递归】
  return module;
};
