import { R } from "./function/R";
import { query } from "./query";

export function RQueryInit() {
  let appRef: any = null;
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
export const RQeury: any = RQueryInit();
