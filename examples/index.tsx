import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import {Module} from '@min-module/core'
import { useProxyStore ,SubscriptionProxy,useGlobalStore , Subscription} from "@min-module/utils";
export const proxy1 = new SubscriptionProxy({list: {data : [1,23,4] , total:1}})
const store = useGlobalStore()
export const App = ()=>{
    const [state , setState ] = useProxyStore(proxy1 , 'list')

    useEffect(()=>{
        setTimeout(() => {
            setState({'data':[4,5,6],'total':1})
        }, 1000);
    },[])
    return <>
        hello,WROLD {state.data.toString()}
    </>
} 


// 渲染你的 React 组件
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);