# plugin 插件
## router插件renderRouter
>  根据当前模块options中配置，来给render添加不同的props参数
```ts
const rootModule: Module = {
  options: {
    routePath: "",
    defaultRoute: <Route path="*" element={<Navigate to={"app"} />} />, // 配置默认路由
  },
  //...
};
```
下面是Module的options类型
```TS
export interface ModuleOptions {
    /**
     * @desc 当前模块的路由路径
     */
    routePath?: string;
    /**
     * renderRouter根据该值进行默认导航
     */
    defaultRoute?: JSX.Element; 
    
    /**
     * 其他参数值：当你想要添加其他参数值的时候使用
     */
    title?: string;
}
```

## config插件renderConfig
> 提供 locale 与 修改locale方法的Context

## locale插件renderLocale
> 提供集成模块locale配置的功能


## data插件renderData
> 为forRoot从外部修改模块options后，内部模块能够感知修改后的options值的能力，从而做出不同的渲染
