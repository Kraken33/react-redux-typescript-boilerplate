import loadableComponent from "@loadable/component";
import pMinDelay from "p-min-delay";

const _cache: any = {};

export const loadable = (
  cacheId: string,
  importFn: () => Promise<any>,
  fallbackFn: () => any,
  delay = 500
): any => {
  let x: any;
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
        fallback:
            ((x = fallbackFn()), typeof x === "function" ? (x as any)() : x)
      }
  );
};
