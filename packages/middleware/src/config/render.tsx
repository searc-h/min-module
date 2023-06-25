import { Middleware,Module } from '@m-module/core';

import { ConfigContext, ConfigProvider } from './context';

export const renderConfig: Middleware = (module:Module, children:JSX.Element) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export { ConfigContext };