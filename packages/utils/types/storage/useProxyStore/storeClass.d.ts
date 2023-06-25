export declare class SubscriptionProxy<T extends Record<string, unknown>> {
    private state;
    private events;
    constructor(state: T);
    private initEvents;
    setState: <K extends keyof T>(propKey: K, value: T[K]) => void;
    getState: <K extends keyof T>(propKey: K) => T[K];
    listen: <K extends keyof T>(propKey: K, handler: (value: T[K]) => void) => void;
    unlisten: <K extends keyof T>(propKey: K, handler: (value: T[K]) => void) => void;
}
