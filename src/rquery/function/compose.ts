import { IEl } from "../query/type";
import { R } from "./R";

// 컴포즈 함수
export const compose =
  <T>(...fns: Function[]) =>
  (value: T) => {
    return [...fns].reverse().reduce((v, f) => f(v), value);
  };

// 파이프 함수
export const pipe =
  <T>(...fns: Function[]) =>
  (value: T) => {
    return [...fns].reduce((v, f) => f(v), value);
  };

// 객체의 모든 자식들을 파이프
export const pipeAll = (
  Ref: R<R<IEl>>,
  setR: any,
  S: any,
  ObjFunction: any
) => {
  const Obj = ObjFunction();
  const object: any = {};
  for (let f of Object.keys(Obj)) {
    object[f] = function () {
      return pipe(setR(Ref, S), Obj[f])(Ref);
    };
    //   object[f]() {
    //     return pipe(getR, Obj[f])(Ref)
    // }
  }
  console.log(object);
  return ObjFunction();
};
