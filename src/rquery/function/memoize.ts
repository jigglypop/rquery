export default function memoize<T>(f: Function) {
  const memoize: IMemorize<T> = function (key: T) {
    const _key = "" + key;
    const cache = memoize.cache || {};
    const flag =
      _key.match("cache:") !== null && _key.match("cache:")?.index === 0;
    if (!cache.hasOwnProperty(_key)) {
      if (flag) {
        delete cache[_key];
        cache[_key] = f.apply(null, arguments);
      } else {
        return f.apply(null, arguments);
      }
    }
    return cache[_key];
  };
  memoize.cache = {};
  memoize.each = () => {};
  return memoize;
}
