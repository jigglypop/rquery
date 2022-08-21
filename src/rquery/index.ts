import memoize from "./function/memoize";
import { R } from "./function/R";
import { checkApp } from "./query/select";
import { I$, IRQuery } from "./type";

export function RQueryInit() {
  let appRef: React.RefObject<HTMLDivElement> | null = null;
  return {
    ready: function (ref: React.RefObject<HTMLDivElement>) {
      appRef = ref;
      return appRef;
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
