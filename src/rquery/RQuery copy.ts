import { MutableRefObject, RefObject } from "react";

export type IElType =
  | Document
  | HTMLElement
  | string
  | (Window & typeof globalThis)
  | RefObject<any>
  | null
  | undefined;

export const $ = (element: IElType) => {
  let $El:
    | HTMLElement
    | null
    | Document
    | (Window & typeof globalThis)
    | MutableRefObject<null>
    | null
    | undefined;

  if (typeof element === "string") {
    $El = document.createElement(`${element}`);
  } else if (element instanceof HTMLElement) {
    $El = element;
  } else {
    $El = element;
  }

  const Arguments = {
    get(): IElType {
      if ($El === null || $El === undefined) {
        return $El;
      } else if ($El) {
        return $El;
      } else {
        $El = document.createElement("div");
        return $El;
      }
    },
    css(attr: keyof CSSStyleDeclaration, value: string) {
      const $element = this.get();
      if ($element === null || $element === undefined) {
        return;
      }
      const $el = $element as RefObject<any>;
      $el.current.style[attr] = value;
      return {
        ...Arguments,
      };
    },
  };

  return {
    ...Arguments,
  };
};
