import { SubscriptionProxy } from "./storeClass";
export declare const useProxyStore: <T extends Record<string, unknown>, K extends keyof T>(store: SubscriptionProxy<T>, propKey: K) => [T[K], (value: T[K]) => void];
