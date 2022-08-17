import memoize from "../function/memoize";
import { R } from "../function/R";
import {
  dots,
  dotsAndParam,
  IDot,
  IDotAndParam,
  IRef,
  ISelectAll,
} from "./type";

// 셀렉트 함수를 모아놓은 부분
export const selectAll = (ref: IRef) => (S: string) => {
  const S_arr = S.split(":");
  const cur = ref?.value?.current;
  return S_arr[0] === "#App"
    ? { cur, S_arr }
    : { cur: cur?.querySelectorAll(S_arr[0]), S_arr };
};

export const findTag = (refArray: ISelectAll) => {
  if (refArray.S_arr[1]) {
    let tag = refArray.S_arr[1].replaceAll("-", "_");
    if (dots.includes(tag)) {
      const _tag = tag as keyof IDot;
      return R.of(refArray.cur)[_tag]();
    } else if (dotsAndParam.includes(tag)) {
      const tagArray = tag.split("(");
      tagArray[1] = tagArray[1].replace(")", "");
      const _tag = tagArray[1] as keyof IDotAndParam;
      return R.of(refArray.cur)[_tag](parseInt(tagArray[1]));
    } else {
      return R.of(refArray.cur);
    }
  } else {
    return R.of(refArray.cur);
  }
};

export const Select = memoize(
  (appRef: React.RefObject<HTMLDivElement> | null, S: string) => {
    return R.of(selectAll)
      .ap(R.of(appRef))
      .ap(S)
      .chain(findTag)
      .rmap(Array.from);
  }
);
