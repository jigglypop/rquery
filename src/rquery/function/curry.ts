export const curry = <T>(f: Function) => {
  return function _curry(...args: T[]): Function {
    if (args.length < f.length) {
      return _curry.bind(null, ...args);
    }
    return f.call(null, ...args);
  };
};
