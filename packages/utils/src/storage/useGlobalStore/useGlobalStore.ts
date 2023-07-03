import { useEffect, useState } from "react"
import { Subscription } from "./index"
window.store = new Map()

const getStore =<T extends Record<string , unknown>>( initState:T  , namespace? : string) : Subscription<T>=>{
    if(!namespace){
        return new Subscription<T>(initState)
    }
    const keys = Array.from(window.store.keys())
    if(keys.includes(namespace)){
        return window.store.get(namespace)
    }else{
        const newStore = new Subscription<T>(initState)
        window.store.set(namespace , newStore)
        return newStore
    }
}

export const useGlobalStore =<T extends Record<string , unknown>>(props: {namespace?:string , initState?:T})=>{
    const {namespace  , initState} = props
    const store = getStore<T>(initState as T,namespace)
    const [storeState , setStoreState] = useState(store.getState())
    useEffect(()=>{
        store.listen(setStoreState)

        return ()=>{
            store.unlisten(setStoreState)
        }
    },[])

    return [storeState , store.setState] as [T , (value  : T)=>void]
}