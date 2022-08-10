import { R } from "./function/R";
import { query } from "./query";
import { IRQuery } from "./type";

export function RQueryInit() {
  let appRef: React.RefObject<HTMLDivElement> | null = null;
  return {
    ready: function (ref: React.RefObject<HTMLDivElement>) {
      appRef = ref;
      return appRef;
    },
    $: function (S: string) {
      return query(R.of(appRef), S);
    },
  };
}
export const RQeury: IRQuery = RQueryInit();
