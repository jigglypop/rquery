import React, { RefObject, useState } from "react";
import memoize from "./function/memoize";
import { R } from "./function/R";
import { checkApp } from "./query/select";

type IRQuery = ReturnType<typeof RQueryInit>;
interface IMemorize<T> {
  (key: T): R<T>;
  each: () => void;
  cache?: ICache<R<T>>;
}

export function RQueryInit() {
  let appRef: RefObject<HTMLElement> | null = null;
  let height: string | null = null;
  return {
    setHeight: function (_height: string) {
      if (height === null) {
        height = _height;
      }
    },
    getHeight: function () {
      return height;
    },
    ready: function <T>(ref: RefObject<HTMLElement>) {
      appRef = ref;
      return appRef;
    },
    $: memoize(function (S: string | React.RefObject<HTMLElement>) {
      const _$ = function (S: string | React.RefObject<HTMLElement>) {
        if (typeof S === "string") {
          S = S.replaceAll("cache:", "");
          return R.of(checkApp(appRef, S)) as unknown as R<HTMLElement[]>;
        } else {
          appRef = S;
          return R.of([S.current as HTMLElement]);
        }
      };
      return _$(S);
    }),
  };
}

export const RQuery: IRQuery = RQueryInit();
export function RQueryRootInit() {
  const $ = RQuery.$ as unknown as IMemorize<
    string | React.RefObject<HTMLElement>
  >;
  return $;
}
