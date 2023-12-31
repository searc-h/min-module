# @min-module
> 这是一个提供模块化组织React组件能力的模块集成框架，目前实现了四个部分：
- [core入口函数与模块类型定义等](https://www.npmjs.com/package/@min-module/core)
- [middleware模块插件](https://www.npmjs.com/package/@min-module/middleware)
- [utils工具函数](https://www.npmjs.com/package/@min-module/utils)
- [cli命令行工具](https://www.npmjs.com/package/@min-module/cli)

## 特点
- 以模块化的风格来使用组件
- 模块插件即插即用
- 基于路由划分模块
- 灵活，降低开发心智负担

## 示例
```tsx
import React, { useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Module, createFactory } from "@min-module/core";
import {
  renderRouter,
  renderConfig,
  renderLocale,
  useIntl,
  ConfigContext,
} from "@min-module/middleware";
import { useProxyStore, SubscriptionProxy } from "@min-module/utils";
import { Link, Route, Routes } from "react-router-dom";

// 使用utils中定义的状态管理：订阅类
export const proxy1 = new SubscriptionProxy({
  list: { data: [1, 23, 4], total: 1 },
});

// 定义模块的渲染组件（与我们平时使用FC没有区别）
export const AppRender = () => {
  const [state, setState] = useProxyStore(proxy1, "list");

  return <div>hello,WROLD {state.data.toString()}</div>;
};
// 定义一个模块（暂时理解为子模块）
const AppModule: Module = {
  // namespace 值将作为本模块对应的路由路径（可以理解为Link的to值，不用带'/'）
  options: { namespace: "app" },
  render: <AppRender />,
};

interface PropsType {
  modules?: Module[];
  /**
   * @description 当路由没有命中时的默认路由
   */
  defaultRoute?: JSX.Element;
  /**
   * @description renderRouter根据模块的import自动生成的Routes
   */
  defaultRoutes?: JSX.Element;
}
const RootRender: React.FC<PropsType> = props => {
  const { modules = [], defaultRoutes, defaultRoute } = props;
  // 使用useIntl来使用国际化能力
  const { getLang } = useIntl<keyof typeof zh>();

  return (
    <>
      <div>Hello! , {getLang("min-module")}</div>

      {defaultRoutes}

      {/* <Routes>
        {modules?.map(item => {
          return (
            <Route
              key={item.options?.routePath}
              element={item.render}
              path={item.options?.routePath + "/"}
            />
          );
        })}
        {defaultRoute}
      </Routes> */}
      {/* 上面的路由配置相当于 {defaultRoutes} */}
      <Link to={"app"}>展示子模块</Link>
    </>
  );
};
// 定义国际化配置对象
export const zh = {
  "min-module": "模块化风格的React模块集成框架",
};
// 定义root模块
const rootModule: Module = {
  options: {
    routePath: "",
    // defaultRoute: <Route path="*" element={<Navigate to={"app"} />} />, // 配置默认路由
  },
  // 引入其他模块作为子模块（路由拼接）
  imports: [
    forRoot(AppModule, {
      // routePath: "",  // 配置路径
      // defaultRoute: <Route path="*" element={<Navigate to={"new"} />} />, // 配置子模块默认路由
    }),
  ],
  locale: [
    {
      type: "zh",
      content: zh,
    },
    { type: "en", content: {} },
  ],
  render: <RootRender />,
};

// 使用入口函数，得到
const Root = createFactory(rootModule, {
  // 使用插件
  middleware: [renderConfig, renderLocale, renderRouter],
});

const root = createRoot(document.getElementById("root") as HTMLElement);
// 渲染你的 React 组件
root.render(Root);


```


## 说明
这个示例貌似比较不友好，仔细看其实是不难的，特别是熟悉Nest的朋友。这里只是为了展现本框架具有的能力，但事实是远不于此。

## 计划
- 筹备cli工具！
- 完善已有功能
- 思考新功能

## 总结
如何让本框架发挥更大的作用？关键在于如何更好的定义和使用模块。    
如何更好的定义和使用模块？关键在于路由划分。    
因此这个框架的上手难度并不大。