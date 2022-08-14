import { R } from "../function/R";

// 첫 요소
export function first<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) => [nodes[0]]);
}
// 마지막 요소
export function last<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) => [nodes[nodes.length - 1]]);
}
// 짝수 요소
export function odd<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) =>
    nodes.filter((node: Node, i: number) => i % 2 === 0)
  );
}
// 홀수 요소
export function even<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) =>
    nodes.filter((node: Node, i: number) => i % 2 === 1)
  );
}
// 인덱스 찾기 함수
export const eq =
  <T>(RNodes: T) =>
  (N: number) => {
    return R.of(RNodes).chain((nodes: Node[]) => nodes[N]);
  };
