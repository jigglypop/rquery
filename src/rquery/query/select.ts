import { R } from "../function/R";
import { IRef } from "./type";

// 셀렉트 함수를 모아놓은 부분
export const selectAll = (ref: IRef) => (S: string) => {
  if (S === "#App") {
    return ref?.value?.current;
  } else {
    return ref?.value?.current?.querySelectorAll(S);
  }
};

// 부모 선택자
export function parent<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) =>
    nodes.reduce(
      (_nodes: Node[], node: Node) =>
        _nodes.concat(node.parentNode ? [node.parentNode] : []),
      []
    )
  );
}
// 자식 선택자
export function children<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) =>
    nodes.reduce(
      (_nodes: Node[], node: Node) =>
        _nodes.concat(node.childNodes ? Array.from(node.childNodes) : []),
      []
    )
  );
}
// 형 이전 요소
export function prev<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) => [nodes[0].previousSibling]);
}
// 형 다음 요소
export function next<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).map((nodes: Node[]) => [nodes[0].nextSibling]);
}

// 형제 요소
// export function siblings(RNodes: Node[]): R<Node[]> {
//   return R.of(RNodes).map((nodes: Node[]) =>
//     nodes.reduce(
//       (_nodes: Node[], node: Node) =>
//         _nodes.concat(node.s ? Array.from(node.childNodes) : []),
//       []
//     )
//   );
// }
