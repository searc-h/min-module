export declare const useGlobalStore: <T extends Record<string, unknown>>(props: {
    namespace?: string | undefined;
    initState?: T | undefined;
}) => [T, (value: T) => void];
