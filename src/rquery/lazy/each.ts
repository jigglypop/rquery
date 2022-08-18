import { Iterator } from "typescript";
import { curry } from "../function/curry";

// 사용자 정의 each
export const each = curry(function* <T>(f: Function, iter: Iterator<T>[]) {
  for (const value of iter) {
    yield f(value);
  }
});
