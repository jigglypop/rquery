import { R } from "../function/R";
import { map } from "../function/each";

// 속성 조작 메서드
// 이벤트 함수
export const on: IOn = (RNodes) => (event) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    map((node: HTMLElement) => {
      node.addEventListener(event, f);
    }, R.of(nodes))
  );
};
// 이벤트 제거 함수
export const off: IOff = (RNodes) => (event) => (f) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    map((node: HTMLElement) => {
      node.removeEventListener(event, f);
    }, R.of(nodes))
  );
};
/* mouse event

1) click() : click event
2) dbclick() : dbclick event
3) mouseout() : mouseout event
4) mouseover() : mouseover event
5) hover() : hover event
6) mousedown() : mousedown event
7) mouseup() : mouseup event
8) mouseenter() : mouseenter event
9) mousemove() : mousemove event
9) scroll() : scroll event

*/

export const defaultmouseevent: IMouseEvent = function (
  event: keyof GlobalEventHandlersEventMap
) {
  const _innermouseevent: IMouseEvent = (RNodes) => (f) => {
    return R.of(RNodes).chain((nodes: HTMLElement[]) =>
      map((node: HTMLElement) => {
        node.addEventListener(event, f);
      }, R.of(nodes))
    );
  };
  return _innermouseevent;
};

export const click: IMouseEvent = defaultmouseevent("click");
export const dbclick: IMouseEvent = defaultmouseevent("dbclick");
export const mouseout: IMouseEvent = defaultmouseevent("mouseout");
export const mouseover: IMouseEvent = defaultmouseevent("mouseover");
export const hover: IMouseEvent = defaultmouseevent("hover");
export const mousedown: IMouseEvent = defaultmouseevent("mousedown");
export const mouseup: IMouseEvent = defaultmouseevent("mouseup");
export const mouseenter: IMouseEvent = defaultmouseevent("mouseenter");
export const mouseleave: IMouseEvent = defaultmouseevent("mouseleave");
export const mousemove: IMouseEvent = defaultmouseevent("mousemove");
export const scroll: IMouseEvent = defaultmouseevent("scroll");

/* focus event

1) focus() : focus event
2) focusin() : focusin event
3) focusout() : focusout event
4) blur() : blur event
5) change() : change event

*/
export const focus: IMouseEvent = defaultmouseevent("focus");
export const focusin: IMouseEvent = defaultmouseevent("focusin");
export const focusout: IMouseEvent = defaultmouseevent("focusout");
export const blur: IMouseEvent = defaultmouseevent("blur");
export const change: IMouseEvent = defaultmouseevent("change");

/* key event

1) keypress() : keypress event
2) keydown() : keydown event
3) keyup() : keyup event

*/
export const keypress: IMouseEvent = defaultmouseevent("keypress");
export const keydown: IMouseEvent = defaultmouseevent("keydown");
export const keyup: IMouseEvent = defaultmouseevent("keyup");
