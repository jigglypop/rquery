import { pipe } from "../function/compose";
import { R } from "../function/R";
import { IEl, IRef } from "./type";

// 셀렉트 함수를 모아놓은 부분
export function setR(Ref: R<R<IEl>>, S: string) {
  return Ref.chain((ref: IRef) =>
    R.of(ref?.value?.current?.querySelectorAll(S))
  );
}
export function parent(Els: R<NodeListOf<any>>) {
  return Els.chain((nodes: any) => {
    const temp: any = [];
    nodes.forEach((node: any) => temp.push(node.parentNode));
    return R.of(temp);
  });
}

// 인접 관계 선택자
export function selection(getR: any, Ref: any) {
  return {
    parent() {
      return pipe(getR, parent)(Ref);
    },
    children() {},
  };
}
