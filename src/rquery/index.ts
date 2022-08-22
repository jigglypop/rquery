import React, { useState } from "react";
import memoize from "./function/memoize";
import { R } from "./function/R";
import { checkApp } from "./query/select";
import { I$, IRQuery } from "./type";

export function RQueryInit() {
  let appRef: React.RefObject<HTMLDivElement> | null = null;
  let _setValue: React.Dispatch<any> | null | undefined = null;
  return {
    ready: function <T>(
      ref: React.RefObject<HTMLDivElement>,
      setValue: React.Dispatch<T>
    ) {
      appRef = ref;
      _setValue = setValue;
      return appRef;
    },
    getValue: function () {
      return _setValue;
    },
    $: memoize(function <T>(S: string) {
      const _$: I$<T> = function (S: string) {
        return R.of(checkApp(appRef, S)) as unknown as R<Node[]>;
      };
      S = S.replaceAll("cache:", "");
      return _$(S);
    }),
  };
}

export const RQuery: IRQuery = RQueryInit();
export function RQueryRootInit() {
  const $ = RQuery.$;
  return $;
}
