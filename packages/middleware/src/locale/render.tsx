import { Middleware, Module, traverseModule } from '@m-module/core/src';
import { LocaleProvider } from './provider';

export const renderLocale: Middleware = (
  module: Module,
  children: JSX.Element
) => {
  const locales = generateLocales(module);

  return <LocaleProvider locales={locales}>{children}</LocaleProvider>;
};

const generateLocales = (module: Module) => {
  return traverseModule(module).reduce(
    (prev:Module, next:any) => {
      prev.zh = Object.assign(formatLocales(next?.locale || [], 'zh'), prev.zh);
      prev.en = Object.assign(formatLocales(next?.locale || [], 'en'), prev.en);
      return prev;
    },
    { zh: {}, en: {} }
  );
};

const formatLocales = (
  locales: { type: string; content: Record<string, string> }[],
  type: string
) => {
  return locales.filter(item => item?.type === type)?.[0]?.content ?? {};
};