import { R } from "../function/R";

// each
export const each: IArray = (RNodes) => (f) => {
  return R.of(RNodes).rmap((nodes: HTMLElement[]) =>
    nodes.forEach((node: HTMLElement, i: number) => f(node, i))
  );
};
// map
export const map: IArray = (RNodes) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    nodes.map((node: HTMLElement, i: number) => f(node, i))
  );
};
// grep
export const grep: IArray = (RNodes) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    nodes.filter((node: HTMLElement, i: number) => f(node, i))
  );
};
// inArray
export const inArray: IInArray = (node) => (RNodes) => (s) => {
  return R.of(RNodes).chain((nodes: Node[]) => {
    for (let i = s ? s : 0; i < nodes.length; i++) {
      const _node = node.getOrElse(null);
      if (_node === null) return -1;
      else if (nodes[i] === _node[0]) {
        return i;
      }
    }
  });
};

// merge
export const merge: IMerge = (RNodes) => (nodes) => {
  return R.of(RNodes).chain((_nodes: HTMLElement[]) => {
    return _nodes.concat(nodes.get());
  });
};
