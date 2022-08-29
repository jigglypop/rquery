import { R } from "../function/R";

// 첫 요소
export const first: ISearch = function (RNodes) {
  return R.of(RNodes).rmap((nodes: Node[]) => [nodes[0]]);
};
// 마지막 요소
export const last: ISearch = function (RNodes) {
  return R.of(RNodes).rmap((nodes: Node[]) => [nodes[nodes.length - 1]]);
};
// 짝수 요소
export const odd: ISearch = function (RNodes) {
  return R.of(RNodes).rmap((nodes: Node[]) =>
    nodes.filter((node: Node, i: number) => i % 2 === 0)
  );
};
// 홀수 요소
export const even: ISearch = function (RNodes) {
  return R.of(RNodes).rmap((nodes: Node[]) =>
    nodes.filter((node: Node, i: number) => i % 2 === 1)
  );
};
// 인덱스 찾기 함수
export const eq: ISearchEq = (RNodes) => (N) => {
  return R.of(RNodes).chain((nodes: Node[]) => nodes[N]);
};
