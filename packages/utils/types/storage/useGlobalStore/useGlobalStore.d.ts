/**
 *
 * @param namespace  全局唯一的storeName
 * @param initState  该store的初始状态，如果这个store已经存在，那么initState将不会对store有影响
 * @returns [state , setState]
 */
export declare const useGlobalStore: <T extends Record<string, unknown>>(props: {
    namespace?: string | undefined;
    initState?: T | undefined;
}) => [T, (value: T) => void];
