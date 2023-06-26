import React from "react";
import { createRoot } from 'react-dom/client';
import {Module} from '@min-module/utils'
export const App = ()=>{
    return <>
        hello,WROLD
    </>
} 


// 渲染你的 React 组件
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);