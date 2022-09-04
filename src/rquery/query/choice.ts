import { R } from "../function/R";

// 부모 선택자
export const parent: IParent = function (RNodes) {
  console.log("hello");
  return R.of(RNodes).rmap((nodes: HTMLElement[]) =>
    nodes.reduce(
      (_nodes: HTMLElement[], node: HTMLElement) =>
        _nodes.concat(node.parentNode ? [node.parentNode as HTMLElement] : []),
      []
    )
  );
};

// 부모 모두 선택
export const parents: IParent = function (RNodes) {
  const getParentsAll = (node: HTMLElement[]) => {
    const matched = [];
    let current = node[0].parentNode;
    while (current && node[0].parentNode) {
      matched.push(current);
      current = current.parentNode;
    }
    return matched;
  };
  return R.of(RNodes).rmap(getParentsAll);
};

// 자식 선택자
export const children: IParent = function (RNodes) {
  return R.of(RNodes).rmap((nodes: HTMLElement[]) =>
    nodes.reduce(
      (_nodes: HTMLElement[], node: HTMLElement) =>
        _nodes.concat(
          node.childNodes
            ? Array.from(node.childNodes as unknown as HTMLElement[])
            : []
        ),
      []
    )
  );
};
// 형 이전 요소
export const prev: IParent = function (RNodes) {
  return R.of(RNodes).rmap((nodes: HTMLElement[]) => [
    nodes[0].previousSibling,
  ]);
};
// 형 다음 요소
export const next: IParent = function (RNodes) {
  return R.of(RNodes).rmap((nodes: HTMLElement[]) => [nodes[0].nextSibling]);
};

// 형제 요소
export const siblings: IParent = function (RNodes) {
  return R.of(RNodes).chain(parent).chain(children);
};
