import { R } from "../function/R";
import { IRef, ISelectAll } from "./type";

// 셀렉트 함수를 모아놓은 부분
export const selectAll = (ref: IRef) => (S: string) => {
  const S_arr = S.split(":");
  const cur = ref?.value?.current;
  return S_arr[0] === "#App"
    ? { cur, S_arr }
    : { cur: cur?.querySelectorAll(S), S_arr };
};
export const findTag = (refArray: ISelectAll) => {
  let tag = null;
  if (refArray.S_arr.length > 1) {
    tag = refArray.S_arr[1];
  }
  console.log(tag);
  return refArray.cur;
};

export const Select = (
  appRef: React.RefObject<HTMLDivElement> | null,
  S: string
) => {
  return R.of(selectAll).ap(R.of(appRef)).ap(S).map(findTag).map(Array.from);
};
