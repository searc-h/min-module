import { SubscriptionProxy } from "./storeClass";
/**
 *
 * @param store SubscriptionProxy实例
 * @param propKey SubscriptionProxy实例的state状态中的key值数组或者单个key值
 * @returns [state ,setState] 此时的state和setState都将局限于propKey指定的范围，以减小副作用
 */
export declare const useProxyStore: <T extends Record<string, unknown>, K extends keyof T>(store: SubscriptionProxy<T>, propKey: K) => [T[K], (value: T[K]) => void];
