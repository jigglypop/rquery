import { pipe } from "../function/pipe";
import { R } from "../function/R";
// import { children, parent, setR } from "./select";
// import { IEl, IQuery } from "./type";

// export const query = (El: R<IEl>, S: string): IQuery => {
//   console.log(El);
//   const Ref = R.of(El);

//   function getR(Ref: any) {
//     return setR(Ref, S);
//   }
//   return {
//     // 세팅
//     set: function () {
//       return null;
//     },
//     get: function () {
//       return setR(Ref, S)?.join();
//     },
//     // 인접 관계 선택자
//     parent: function () {
//       return pipe(getR, parent)(Ref);
//     },
//     children() {
//       return pipe(getR, children)(Ref);
//     },
//   };
// };
