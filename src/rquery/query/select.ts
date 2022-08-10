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
export function parent(Els: R<Node[]>) {
  return Els.chain((nodes: Node[]) =>
    R.of(
      nodes.reduce(
        (_nodes: Node[], node: Node) =>
          _nodes.concat(node.parentNode ? [node.parentNode] : []),
        []
      )
    )
  );
}
// 자식 선택자
export function children(Els: R<Node[]>) {
  return Els.chain((nodes: Node[]) =>
    R.of(
      nodes.reduce(
        (_nodes: Node[], node: Node) =>
          _nodes.concat(node.childNodes ? Array.from(node.childNodes) : []),
        []
      )
    )
  );
}

// 형 이전 요소
export function prev(Els: R<Node[]>) {
  return Els.chain((nodes: Node[]) => R.of(nodes[0].previousSibling));
}

export function siblings(Els: R<NodeListOf<Node>>) {
  return Els.chain((nodes: NodeListOf<Node>) => {
    const temp: Node[] = [];
    nodes.forEach((node: Node) => {
      // node.nextSibling
    });
    return R.of(temp);
  });
}
