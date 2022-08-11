import { R } from "../function/R";
import { RQuery } from "../index";

// 인덱스 찾기 함수
export const index =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.indexOf(RQuery.$(S).getOrElse(null)[0])
    );
  };

// 찾기 함수
export const find =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      nodes.find(RQuery.$(S).getOrElse(null)[0])
    );
  };
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
