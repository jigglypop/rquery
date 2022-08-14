import { R } from "../function/R";

export function Log<T>(ref: T) {
  console.log(ref);
  return R.of(ref);
}
