export type SubscriptionEvent<T> = (state: T) => void;

export type ProxyEvent<T, K extends keyof T> = {
  type: K;
  handler: (state: T[K]) => void;
};
