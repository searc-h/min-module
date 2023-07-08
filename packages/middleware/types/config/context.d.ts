import React, { FC } from "react";
export type LocaleType = "zh" | "en";
interface DataType {
    locale: LocaleType;
}
interface MethodsType {
    changeLocale: (value: LocaleType) => void;
}
interface ContextProps {
    state: DataType;
    methods: MethodsType;
}
declare const ConfigContext: React.Context<ContextProps>;
interface ProviderProps {
    children: JSX.Element;
}
declare const ConfigProvider: FC<ProviderProps>;
export { ConfigContext, ConfigProvider };
