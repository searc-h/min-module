import { useEffect, useState } from "react";
import { Subscription } from "./index";

const store: Record<symbol, Subscription<any>> = {};
const symbolStore: symbol = Symbol("store");
window[symbolStore] = store;

const getStore = <T extends Record<string, unknown>>(
  initState: T,
  namespace?: string
): Subscription<T> => {
  if (!namespace) {
    return new Subscription<T>(initState);
  }
  if (store[Symbol.for(namespace)]) {
    return store[Symbol.for(namespace)];
  } else {
    const newStore = new Subscription<T>(initState);
    const symbolKey = Symbol.for(namespace);
    store[symbolKey] = newStore;
    return newStore;
  }
};

/**
 *
 * @param namespace  全局唯一的storeName
 * @param initState  该store的初始状态，如果这个store已经存在，那么initState将不会对store有影响
 * @returns [state , setState]
 */
export const useGlobalStore = <T extends Record<string, unknown>>(props: {
  namespace?: string;
  initState?: T;
}) => {
  const { namespace, initState } = props;
  const store = getStore<T>(initState as T, namespace);
  const [storeState, setStoreState] = useState(store.getState());
  useEffect(() => {
    store.listen(setStoreState);

    return () => {
      store.unlisten(setStoreState);
    };
  }, []);

  return [storeState, store.setState] as [T, (value: T) => void];
};
