# utils 工具

### 状态管理相关
## useGlobalStore
```ts
/**
 *
 * @param namespace  全局唯一的storeName
 * @param initState  该store的初始状态，如果这个store已经存在，那么initState将不会对store有影响
 * @returns [state , setState]
 */
export const useGlobalStore = <T extends Record<string, unknown>>(props: {
  namespace?: string;
  initState?: T;
}) {...}
```

## useProxyStore
```ts
/**
 *
 * @param store SubscriptionProxy实例
 * @param propKey SubscriptionProxy实例的state状态中的key值数组或者单个key值
 * @returns [state ,setState] 此时的state和setState都将局限于propKey指定的范围，以减小副作用
 */
export const useProxyStore = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  store: SubscriptionProxy<T>,
  propKey: K
) => {...}
```

## 网络服务相关


## 例子