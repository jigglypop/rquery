import { Select } from "./query/select";
import { IRQuery } from "./type";

export function RQueryInit() {
  let appRef: React.RefObject<HTMLDivElement> | null = null;
  return {
    ready: function (ref: React.RefObject<HTMLDivElement>) {
      appRef = ref;
      return appRef;
    },
    $: function (S: string) {
      return Select(appRef, S);
    },
  };
}
export const RQuery: IRQuery = RQueryInit();
