import { Iterator } from "typescript";
import { curry } from "./curry";

export const take = curry(<T>(l: number, iter: Iterator<T>[]) => {
  const result = [];
  for (const cur of iter) {
    result.push(cur);
    if (result.length === l) return result;
  }
  return result;
});
