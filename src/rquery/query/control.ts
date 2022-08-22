import { R } from "../function/R";
import { map } from "../function/each";
import { IAttrObj, ICssObj } from "./type";

// 속성 조작 메서드

// css 함수
export const css =
  <T>(RNodes: T) =>
  (P: CSSStyleDeclaration | ICssObj) =>
  (value?: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          if (typeof P === "string") {
            if (value) {
              node.style[P] = value;
              return node;
            } else {
              return node.style[P];
            }
          } else {
            for (let p in P as ICssObj) {
              node.style[p] = P[p] as string;
            }
            return node;
          }
        }, R.of(nodes))
      )
      .get();
  };

// attr
export const attr =
  <T>(RNodes: T) =>
  <U>(P: React.AllHTMLAttributes<U> | IAttrObj<U>) =>
  (value?: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          if (typeof P === "string") {
            if (value) {
              node.setAttribute(P, value);
              return node;
            } else {
              return node.getAttribute(P);
            }
          } else {
            for (let p in P) {
              node.setAttribute(p, P[p as keyof IAttrObj<U>]);
            }
            return node;
          }
        }, R.of(nodes))
      )
      .get();
  };

export const removeAttr =
  <T>(RNodes: T) =>
  <U>(attr: keyof React.AllHTMLAttributes<U>) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          node.removeAttribute(attr);
          return node;
        }, R.of(nodes))
      )
      .get();
  };

export const addClass =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          node.classList.add(S);
        }, R.of(nodes))
      )
      .get();
  };

export const removeClass =
  <T>(RNodes: T) =>
  (S: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          node.classList.remove(S);
        }, R.of(nodes))
      )
      .get();
  };

export const text =
  <T>(RNodes: T) =>
  (S?: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          return S ? (node.innerText = S) : node.innerText;
        }, R.of(nodes))
      )
      .get();
  };

export const html =
  <T>(RNodes: T) =>
  (S?: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLElement) => {
          return S ? (node.innerHTML = S) : node.innerHTML;
        }, R.of(nodes))
      )
      .get();
  };

export const val =
  <T>(RNodes: T) =>
  (S?: string) => {
    return R.of(RNodes)
      .chain((nodes: Node[]) =>
        map((node: HTMLInputElement) => {
          return S ? (node.value = S) : node.value;
        }, R.of(nodes))
      )
      .get();
  };
