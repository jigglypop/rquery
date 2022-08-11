import { RefObject } from "react";
import { R } from "../function/R";

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

export type IQuery = {
  set: (El: R<IEl>) => Node[];
  get: () => any;
  parent: () => IQuery;
  children: () => void;
  prev: () => void;
};
