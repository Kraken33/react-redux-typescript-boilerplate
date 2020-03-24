import React from 'react';
import loadableComponent from "@loadable/component";
import pMinDelay from "p-min-delay";

const _cache: any = {};

export const loadable = (
  cacheId: string,
  importFn: () => Promise<any>,
  fallbackFn: () => React.ReactNode,
  delay = 500
): any => {
  let x = fallbackFn();
  // eslint-disable-next-line no-return-assign
  return loadableComponent(
    () => {
      if (_cache[cacheId]) {
        return importFn();
      }
      _cache[cacheId] = true;
      if (delay > 0) {
        return pMinDelay(importFn(), delay);
      }
      return importFn();
    },
    _cache[cacheId]
      ? undefined
      : {
        fallback: (typeof x === "function" ? x() : x)
      }
  );
};
