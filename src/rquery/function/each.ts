import { curry } from "./curry";
import { R } from "./R";

// 사용자 정의 map
export const map = curry(function <T>(f: Function, iter: R<Iterator<T>[]>) {
  const result = [];
  for (const value of iter.get()) {
    result.push(f(value));
  }
  return R.of(result);
});

export const each = curry(function <T>(f: Function, iter: R<Iterator<T>[]>) {
  for (const value of iter.get()) {
    f(value);
  }
});
