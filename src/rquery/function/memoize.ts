import { R } from "./R";

// const memo = function
export type ICache<T> = {
  [key in string]: T;
};

export type IMemorize<T> = {
  (key: T): R<T>;
  cache?: ICache<R<T>>;
};

export default function memoize<T>(f: Function) {
  const memoize: IMemorize<T> = function (key: T) {
    const address = "" + key;
    const cache = memoize.cache || {};
    if (!cache.hasOwnProperty(address)) {
      delete cache[address];
      cache[address] = f.apply(null, arguments);
    }
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}
