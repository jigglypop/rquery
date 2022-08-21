import { RQueryInit } from ".";
import { R } from "./function/R";

export type IRQuery = ReturnType<typeof RQueryInit>;

export type IFunction<T> = {
  [key in string]: T;
};

export type I$<T> = {
  (S: string): R<Node[]>;
  each?: () => R<string>;
};
