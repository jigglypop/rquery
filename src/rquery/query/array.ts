import { R } from "../function/R";

// each
export const each =
  <T>(RNodes: T) =>
  (f: Function) => {
    return R.of(RNodes).rmap((nodes: Node[]) =>
      nodes.forEach((node: Node, i: number) => f(node, i))
    );
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

// merge
export const merge =
  (RNodes: Node[]) =>
  <T>(nodes: T) => {
    return R.of(RNodes).chain((_nodes: Node[]) => {
      return _nodes.concat((nodes as any).get());
    });
  };
