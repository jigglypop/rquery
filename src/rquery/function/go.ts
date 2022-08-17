import { reduce } from "./reduce";

//   };
export const go = <T>(...fns: Function[]) =>
  [...fns].reduce((v, f) => f(v), fns[0]);
