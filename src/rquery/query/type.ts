import { RefObject } from "react";

export type IEl =
  | Document
  | HTMLElement
  | string
  | (Window & typeof globalThis)
  | RefObject<HTMLElement>
  | null
  | undefined;

export type IRef = {
  value: RefObject<HTMLElement>;
};
