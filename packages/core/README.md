# core 核心实现
> 这里有使用本项目的入口函数
## 类型定义：
### Module模块类型定义
```ts
export interface Module<T = Record<string, unknown>> {
    imports?: Module[]; // 引入别的模块
    options?: ModuleOptions & T;  // 配置选项
    locale?: {    // 国际化配置对象
        type: string;
        content: Record<string, string>;
    }[];
    // 
    render?: React.FunctionComponentElement<PropsType>;
}
```
## API:
### createFactory
> 入口函数
```TS
const createFactory: (appModule: Module, options?: FactoryOptions) => JSX.Element;
```
示例
```tsx
// 页面组件的props类型
interface PropsType { 
    modules? : Module[]
}
// 模块的render，平时写的页面组件
const RootRender : React.FC<PropsType> = props =>{
    const { modules = [] } = props
    return (...)
}
// root模块定义
const rootModule : Module = {
    options : {namespace : ''},
    imports : [AppModule],
    locale : [] ,
    render : <RootRender />
}

const App = createFactory(rootModule , {
    middleware : [renderConfig,renderLocale,renderRouter]
}) 

```
### forRoot
```

```
