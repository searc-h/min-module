export declare class Subscription<T extends Record<string, unknown>> {
    private state;
    private events;
    constructor(state: T);
    private initEvents;
    setState: (value: T) => void;
    getState: () => T;
    listen: (handler: (value: T) => void) => void;
    unlisten: (handler: (value: T) => void) => void;
}
