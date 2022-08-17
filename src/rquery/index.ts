import memoize from "./function/memoize";
import { R } from "./function/R";
import { findTag, selectAll } from "./query/select";
import { IRQuery } from "./type";

export function RQueryInit() {
  let appRef: React.RefObject<HTMLDivElement> | null = null;
  return {
    ready: function (ref: React.RefObject<HTMLDivElement>) {
      appRef = ref;
      return appRef;
    },
    $: memoize(function (S: string) {
      return R.of(selectAll)
        .ap(R.of(appRef))
        .ap(S)
        .chain(findTag)
        .rmap(Array.from);
    }),
  };
}
export const RQuery: IRQuery = RQueryInit();
export function RQueryRootInit() {
  const $ = RQuery.$;
  return $;
}
