import { R } from "../function/R";
import { selection, setR } from "./select";
import { IEl } from "./type";

export const query = (El: R<IEl>, S: string) => {
  const Ref = R.of(El);

  function getR(Ref: any) {
    return setR(Ref, S);
  }

  const Arguments = {
    get() {
      return this.setR(Ref, S)?.join();
    },
    // 세팅
    setR,
    // 인접 관계 선택자
    ...selection(getR, Ref),
    css(a: string, b: string) {},
  };

  return {
    ...Arguments,
  };
};
