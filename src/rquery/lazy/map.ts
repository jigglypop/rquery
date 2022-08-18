import { curry } from "../function/curry";

// 사용자 정의 map
export const map = curry(function* <T>(f: Function, iter: Iterator<T>[]) {
  for (const value of iter) {
    yield f(value);
  }
});
