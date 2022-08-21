import { $ } from "../..";
import { map } from "../function/each";
import { R } from "../function/R";
import { filter } from "../function/filter";

// 인덱스 찾기 함수

export const has =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes)
      .children()
      .chain((nodes: Node[]) =>
        filter((node: any) => {
          return node.tagName === S.toUpperCase();
        }, nodes)
      );
  };

export const contains =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      filter((node: any) => node.innerText.match(S) !== null, nodes)
    );
  };

export const contents = <T>(RNodes: T) => {
  return R.of(RNodes)
    .children()
    .chain((nodes: Node[]) => [nodes[0]]);
};
