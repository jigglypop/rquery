import React, { RefObject } from "react";
import { R } from "../function/R";

export type IEl =
  | Document
  | HTMLElement
  | string
  | (Window & typeof globalThis)
  | RefObject<HTMLElement>
  | null
  | undefined;

export type IRef = RefObject<HTMLElement>;

export type IQuery = {
  set: (El: R<IEl>) => Node[];
  get: () => any;
  parent: () => IQuery;
  children: () => void;
  prev: () => void;
};

export type ICheckApp = {
  cur: HTMLElement | null | NodeListOf<Element> | undefined;
  SArr: string[];
  param: string | null | undefined;
  fname: string | null | undefined;
};

export type IDotAndParam = {
  eq: (N: number) => R<Node[]>;
};

export type IDot = {
  first: () => R<Node[]>;
  last: () => R<Node[]>;
  first_of_type: () => R<Node[]>;
  last_of_type: () => R<Node[]>;
  odd: () => R<Node[]>;
  even: () => R<Node[]>;
};

export const dots = [
  "first",
  "last",
  "first_of_type",
  "last_of_type",
  "odd",
  "even",
];
export const dotsAndParam = ["eq"];

export type ISelectAll = {
  cur: HTMLElement | null;
  S_arr: string[];
};

export type IKeyOfQuery = typeof R[keyof typeof R];

export type CSSProperty = keyof CSSStyleDeclaration;

export type ICssObj = {
  [key in CSSProperty]?: string;
};

export type AttrProperty<T> = keyof React.AllHTMLAttributes<T>;

export type IAttrObj<T> = {
  [key in AttrProperty<T>]?: string;
};
