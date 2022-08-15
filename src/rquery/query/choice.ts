import { R } from "../function/R";

// 부모 선택자
export function parent<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).rmap((nodes: Node[]) =>
    nodes.reduce(
      (_nodes: Node[], node: Node) =>
        _nodes.concat(node.parentNode ? [node.parentNode] : []),
      []
    )
  );
}

// 부모 모두 선택
export function parents<T>(RNodes: T): R<Node[]> {
  const getParentsAll = (node: Node[]) => {
    const matched = [];
    let current = node[0].parentNode;
    while (current && node[0].parentNode) {
      matched.push(current);
      current = current.parentNode;
    }
    return matched;
  };
  return R.of(RNodes).rmap(getParentsAll);
}

// 자식 선택자
export function children<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).rmap((nodes: Node[]) =>
    nodes.reduce(
      (_nodes: Node[], node: Node) =>
        _nodes.concat(node.childNodes ? Array.from(node.childNodes) : []),
      []
    )
  );
}
// 형 이전 요소
export function prev<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).rmap((nodes: Node[]) => [nodes[0].previousSibling]);
}
// 형 다음 요소
export function next<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).rmap((nodes: Node[]) => [nodes[0].nextSibling]);
}

// 형제 요소
export function siblings<T>(RNodes: T): R<Node[]> {
  return R.of(RNodes).chain(parent).chain(children);
}
