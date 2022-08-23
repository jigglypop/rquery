import { R } from "../function/R";
import { map } from "../function/each";

// 속성 조작 메서드
// 이벤트 함수
export const on =
  <T>(RNodes: T) =>
  (event: keyof GlobalEventHandlersEventMap) =>
  (f: (e: Event) => void) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      map((node: HTMLElement) => {
        node.addEventListener(event, f);
      }, R.of(nodes))
    );
  };
// 이벤트 함수
export const off =
  <T>(RNodes: T) =>
  (event: keyof GlobalEventHandlersEventMap) =>
  (f: (e: Event) => void) => {
    return R.of(RNodes).chain((nodes: Node[]) =>
      map((node: HTMLElement) => {
        node.removeEventListener(event, f);
      }, R.of(nodes))
    );
  };
