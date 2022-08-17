import { R } from "../function/R";

// each
const _range = function* (l: number) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

export const range = (l: number) => {
  const rangeinner = _range(l);
  for (let i = 0; i < l; l++) {
    rangeinner.next();
  }
  return _range(l).next();
};

export const each =
  <T>(RNodes: T) =>
  (f: Function) => {
    return R.of(RNodes).rmap((nodes: Node[]) => {
      // const _each = function* (nodes: Node[]) {
      //   for (const node of nodes) {
      //     yield f(node);
      //   }
      // };
      // for
    });
  };
// map
export const map =
  <T>(RNodes: T) =>
  (f: Function) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.map((node: Node, i: number) => f(node, i))
    );
  };
// grep
export const grep =
  <T>(RNodes: T) =>
  (f: Function) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.filter((node: Node, i: number) => f(node, i))
    );
  };
// inArray
export const inArray =
  <T>(node: R<Node>) =>
  (RNodes: T) =>
  (s?: number) => {
    return R.of(RNodes).chain((nodes: Node[]) => {
      for (let i = s ? s : 0; i < nodes.length; i++) {
        const _node = node.getOrElse(null) as Node[] | null;
        if (_node === null) return -1;
        else if (nodes[i] === _node[0]) {
          return i;
        }
      }
    });
  };
