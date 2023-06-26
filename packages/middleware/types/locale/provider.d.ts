import { FC } from 'react';
interface PropsType {
    locales: Record<string, Record<string, string>>;
    children: React.ReactNode;
}
export declare const LocaleProvider: FC<PropsType>;
export {};
