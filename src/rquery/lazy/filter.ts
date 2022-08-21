import { Iterator } from "typescript";
import { curry } from "../function/curry";

// 사용자 정의 filter(lazy)
export const filter = curry(function* <T>(f: Function, iter: Iterator<T>[]) {
  for (const cur of iter) {
    if (f(cur)) yield cur;
  }
});
