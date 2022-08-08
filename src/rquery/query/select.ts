import { R } from "../function/R";
import { IEl, IRef } from "./type";

// 셀렉트 함수를 모아놓은 부분
export function setR(Ref: R<R<IEl>>, S: string) {
  return Ref.chain((ref: IRef) =>
    R.of(ref?.value?.current?.querySelectorAll(S))
  );
}
// 인접 관계 선택자
export function selection(getR: any, Ref: any) {
  return {
    parent() {
      return Ref.chain((nodes: any) => {
        console.log(nodes);
        const temp: any = [];
        nodes.forEach((node: any) => temp.push(node.parentNode));
        return R.of(temp);
      });
    },
    news() {
      return 1;
    },
  };
}
export function parent(Els: R<NodeListOf<any>>) {
  console.log("parent");
  return Els.chain((nodes: any) => {
    const temp: any = [];
    nodes.forEach((node: any) => temp.push(node.parentNode));
    return R.of(temp);
  });
}
