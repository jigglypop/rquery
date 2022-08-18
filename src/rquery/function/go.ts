import { reduce } from "./reduce";

//   };
export const go = <T>(arg: T, ...fns: Function[]) =>
  [...fns].reduce((v, f) => f(v), arg);
