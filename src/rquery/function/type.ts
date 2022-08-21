import { R } from "./R";

export type ICache<T> = {
  [key in string]: T;
};

export type IMemorize<T> = {
  (key: T): R<T>;
  cache?: ICache<R<T>>;
};
