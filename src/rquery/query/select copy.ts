import { R } from "../function/R";
import { IEl, IRef } from "./type";

// 셀렉트 함수를 모아놓은 부분
export function setR(Ref: R<R<IEl>>, S: string) {
  return Ref.chain((ref: IRef) => {
    if (S === "#App") {
      return R.of([ref?.value?.current]);
    } else {
      return R.of(ref?.value?.current?.querySelectorAll(S));
    }
  })?.map(Array.from);
}

// 인접 관계 선택자
// export function parent(Els: Node[]) {
//   const getArray = (nodes: any) => {
//     return Array.from(
//       nodes
//         .join()
//         .reduce(
//           (_nodes: Set<Node>, node: Node) =>
//             node.parentNode && _nodes.add(node.parentNode),
//           new Set()
//         )
//     );
//   };
//   return R.of(getArray).ap(Els);
// }

export function parent(Els: R<NodeListOf<Node>>) {
  // return Els.chain((nodes: NodeListOf<Node>) => {
  //   const temp: Node[] = [];
  //   nodes.forEach((node: Node) => {
  //     if (node.childNodes) {
  //       node.childNodes.forEach((child: Node) => {
  //         temp.push(child);
  //       });
  //     }
  //   });
  //   return R.of(temp);
  // });
  return Els;
}
// 자식 선택자
export function children(Els: R<NodeListOf<Node>>) {
  return Els.chain((nodes: NodeListOf<Node>) => {
    const temp: Node[] = [];
    nodes.forEach((node: Node) => {
      if (node.childNodes) {
        node.childNodes.forEach((child: Node) => {
          temp.push(child);
        });
      }
    });
    return R.of(temp);
  });
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
