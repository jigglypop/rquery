import { pipe } from "../function/pipe";
import { R } from "../function/R";
import { children, parent, prev, selectAll } from "./select";
import { IEl, IQuery } from "./type";

export const query = (El: R<IEl>, S: string): IQuery => {
  const Ref = El;
  return {
    // 세팅
    set: function (El: R<IEl>) {
      return R.of(selectAll).ap(El).ap(S).map(Array.from);
    },
    get: function () {
      return this.set(Ref).join();
    },
    // 인접 관계 선택자
    parent: function () {
      return pipe(this.set, parent)(Ref);
    },
    children: function () {
      return pipe(this.set, children)(Ref);
    },
    prev: function () {
      return pipe(this.set, prev)(Ref);
    },
  };
};
