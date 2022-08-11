import { R } from "./function/R";
import { selectAll } from "./query/select";
import { IRQuery } from "./type";

export function RQueryInit() {
  let appRef: React.RefObject<HTMLDivElement> | null = null;
  return {
    ready: function (ref: React.RefObject<HTMLDivElement>) {
      appRef = ref;
      return appRef;
    },
    $: function (S: string) {
      const refArr = R.of(selectAll)
        .ap(R.of(appRef))
        .ap(S)
        .map(Array.from)
        .getOrElse(null);
      return new R(refArr);
    },
  };
}
export const RQeury: IRQuery = RQueryInit();
