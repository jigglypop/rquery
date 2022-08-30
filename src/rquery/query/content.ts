import { $ } from "../..";
import { map } from "../function/each";
import { R } from "../function/R";
import { filter } from "../function/filter";

// 인덱스 찾기 함수

export const has: IHas = (RNodes) => (S) => {
  return R.of(RNodes)
    .children()
    .chain((nodes: HTMLElement[]) =>
      filter((node: HTMLElement) => {
        return node.tagName === S.toUpperCase();
      }, nodes)
    );
};

export const contains: IHas = (RNodes) => (S) => {
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    filter((node: HTMLElement) => node.innerText.match(S) !== null, nodes)
  );
};

export const contents: IContents = (RNodes) => {
  return R.of(RNodes)
    .children()
    .chain((nodes: HTMLElement[]) => [nodes[0]]);
};

export const not: INot = (RNodes) => (S) => {
  const _nodes = $(S).get() as HTMLElement[];
  return R.of(RNodes).chain((nodes: HTMLElement[]) =>
    filter((node: HTMLElement) => _nodes.indexOf(node) !== -1, nodes)
  );
};
