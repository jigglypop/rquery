import { Iterator } from "typescript";

// 사용자 정의 reduce
export const reduce = <T>(f: Function, iter: Iterator<T>[], init: T) => {
  for (const cur of iter) {
    init = f(init, cur);
  }
  return init;
};
