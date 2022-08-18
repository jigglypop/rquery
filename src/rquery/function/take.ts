import { Iterator } from "typescript";
import { curry } from "./curry";

export const take = curry(<T>(l: number, iter: Iterator<T>[]) => {
  const _data = [];
  for (const item of iter) {
    _data.push(item);
    if (_data.length === l) return _data;
  }
  return _data;
});
