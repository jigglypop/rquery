import { $ } from "../..";
import { R } from "../function/R";

// 인덱스 찾기 함수
export const index =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.indexOf($(S).get() as Node)
    );
  };

// 찾기 함수
export const find =
  <T>(RNodes: T) =>
  (S: string) => {
    console.log($(S).get());
    return R.of(RNodes).chain((nodes: Node[]) => nodes.find($(S).get() as any));
  };

//
export const contains =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes)
      .index(S)
      .rmap((x: number) => (x === -1 ? false : true));
  };

export const is =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((x: any) => x[0].style.display);
  };
