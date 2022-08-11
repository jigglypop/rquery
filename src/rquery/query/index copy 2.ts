import { pipe } from "../function/pipe";
import { R } from "../function/R";
// import { children, parent, prev, selectAll } from "./select";
import { IEl, IQuery } from "./type";

export const query = (El: R<IEl>, S: string) => {
  const Ref = El;

  // const Arguments = (): IQuery => {
  //   return {
  //     // 세팅
  //     set: function (El: R<IEl>): any {
  //       return R.of(selectAll).ap(El).ap(S).map(Array.from);
  //     },
  //     get: function () {
  //       return this.set(Ref).join();
  //     },
  //     // 인접 관계 선택자
  //     parent: function (): IQuery {
  //       return pipe(this.set, parent, Arguments)(Ref) as IQuery;
  //     },
  //     children: function () {
  //       return pipe(this.set, children)(Ref);
  //     },
  //     prev: function () {
  //       return pipe(this.set, prev)(Ref);
  //     },
  //   };
  // };

  // return {
  //   ...Arguments(),
  // };
};
