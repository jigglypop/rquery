import { R } from "../function/R";
import { map } from "../function/each";

// 속성 조작 메서드
export const dots = [
  "first",
  "last",
  "first_of_type",
  "last_of_type",
  "odd",
  "even",
];
export const dotsAndParam = ["eq"];

// css 함수
export const css: ICss = (RNodes) => (P) => (value?) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
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
export const attr: IAttr = (RNodes) => (P) => (value) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
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
            node.setAttribute(p, P[p as keyof IAttrObj<HTMLElement[]>]);
          }
          return node;
        }
      }, R.of(nodes))
    )
    .get();
};

export const removeAttr: IRemoveAttr = (RNodes) => (attr) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
      map((node: HTMLElement) => {
        node.removeAttribute(attr);
        return node;
      }, R.of(nodes))
    )
    .get();
};

export const addClass: IControlClass = (RNodes) => (S) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
      map((node: HTMLElement) => {
        node.classList.add(S);
      }, R.of(nodes))
    )
    .get();
};

export const removeClass: IControlClass = (RNodes) => (S) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
      map((node: HTMLElement) => {
        node.classList.remove(S);
      }, R.of(nodes))
    )
    .get();
};

export const text: IControl = (RNodes) => (S?) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
      map((node: HTMLElement) => {
        return S ? (node.innerText = S) : node.innerText;
      }, R.of(nodes))
    )
    .get();
};

export const html: IControl = (RNodes) => (S?) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
      map((node: HTMLElement) => {
        return S ? (node.innerHTML = S) : node.innerHTML;
      }, R.of(nodes))
    )
    .get();
};

export const val: IControl = (RNodes) => (S?) => {
  return R.of(RNodes)
    .chain((nodes: HTMLElement[]) =>
      map((node: HTMLInputElement) => {
        return S ? (node.value = S) : node.value;
      }, R.of(nodes))
    )
    .get();
};
