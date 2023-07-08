import React, { useContext, useEffect } from "react";
import { createRoot  } from 'react-dom/client';
import {Module, createFactory} from '@min-module/core'
import {renderRouter,renderConfig, renderLocale, useIntl, ConfigContext} from '@min-module/middleware'
import { useProxyStore ,SubscriptionProxy,useGlobalStore , Subscription} from "@min-module/utils";
import { Navigate, Outlet, Route, Routes, useLocation  } from "react-router-dom";

export const proxy1 = new SubscriptionProxy({list: {data : [1,23,4] , total:1}})

export const AppRender = ()=>{
    const [state , setState ] = useProxyStore(proxy1 , 'list')

    useEffect(()=>{
        setTimeout(() => {
            setState({'data':[4,5,6],'total':1})
        }, 1000);
    },[])
    return <div>
        hello,WROLD {state.data.toString()}
    </div>
} 

const AppModule  : Module= {
    options : {namespace : 'app'},
    render : <AppRender/>
} 

interface PropsType { 
    modules? : Module[]
}
const RootRender : React.FC<PropsType> = (props)=>{
    const {modules=[]} = props
        const {getLang} = useIntl<keyof (typeof zh)>()
        const aa = useContext(ConfigContext)
        
    useEffect(()=>{
        aa.methods.changeLocale('en')
    },[])
    return (
       <>
       hello {getLang('app')}
         <Routes >
          {
            modules?.map(item=>
              {
                console.log(item.options)
                return (
                    <Route key={item.options?.namespace} element={item.render} path={item.options?.namespace + '*'}/>
                )
              }
            )
          }
           <Route index element={ <Navigate to={'/app'}/> }/>
        </Routes>
       </>
    )
}
export const zh =  {
    'app':'没问题'
}
export const en = {

}
const rootModule : Module = {
    options : {namespace : ''},
    imports : [AppModule],
    locale : [{
        type : 'zh' ,
        content : zh,
    },{type : 'en' , content : en}],
    render : <RootRender />
}

const App = createFactory(rootModule , {
    middleware : [renderConfig,renderLocale,renderRouter]
}) 

// 渲染你的 React 组件
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(App);