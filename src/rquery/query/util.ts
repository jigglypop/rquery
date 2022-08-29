import { R } from "../function/R";

export function Log(ref: IRProps) {
  console.log(ref);
  return R.of(ref);
}
