export declare class Subscription<T extends Record<string, unknown>> {
    private state;
    private events;
    constructor(state: T);
    private initEvents;
    setState: (value: T) => void;
    getState: <K extends keyof T>(propKey: K) => T[K];
    listen: (handler: (value: T) => void) => void;
    unlisten: (handler: (value: T) => void) => void;
}
