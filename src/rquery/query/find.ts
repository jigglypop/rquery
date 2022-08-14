import { R } from "../function/R";
import { RQuery } from "../index";

// 인덱스 찾기 함수
export const index =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.indexOf(RQuery.$(S).getOrElse(null)[0])
    );
  };

// 찾기 함수
export const find =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.find(RQuery.$(S).getOrElse(null)[0])
    );
  };

//
export const contains =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes)
      .index(S)
      .map((x: number) => (x === -1 ? false : true));
  };

export const is =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((x: any) => x[0].style.display);
  };
