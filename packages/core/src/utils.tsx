import { Middleware, Module } from '../interface';

export const compose = (middlewares: Middleware[], args: Module) => {
  return middlewares.reduceRight(
    (prev, next) => next(args, prev),
    (<></>) as JSX.Element
  );
};

