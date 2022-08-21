import { $ } from "../..";
import { map } from "../function/each";
import { go } from "../function/go";
import { R } from "../function/R";
import { take } from "../function/take";
import { lazy } from "../lazy";

// 인덱스 찾기 함수
export const index =
  <T>(RNodes: T) =>
  (S: string) => {
    const _nodes = $(S).get() as Node[];
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        R.of(
          go(
            lazy.range(nodes.length),
            lazy.filter((i: number) => _nodes[0].isSameNode(nodes[i])),
            take(1)
          )
        )
      )
      .chain((x: number[]) => x[0]);
  };

// 찾기 함수
export const find =
  <T>(RNodes: T) =>
  (S: string) => {
    const _nodes = $(S).get() as Node[];
    return R.of(RNodes).chain((nodes: Node[]) =>
      go(
        nodes,
        lazy.filter((node: Node) => _nodes.indexOf(node) !== -1),
        take(Infinity)
      )
    );
  };

export const is =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((x: any) => x[0].style.display);
  };
