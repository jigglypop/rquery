import { compose, pipe, pipeAll } from "../function/compose";
import { R } from "../function/R";
import { parent, selection, setR } from "./select";
import { IEl } from "./type";

export const query = (El: R<IEl>, S: string) => {
  const Ref = R.of(El);

  function getR() {
    return setR(Ref, S);
  }

  const Arguments = {
    get() {
      return this.setR(Ref, S)?.join();
    },
    // 세팅
    setR,
    // 인접 관계 선택자
    parent() {
      return pipe(getR, parent)(Ref);
    },
    css(a: string, b: string) {},
  };

  return {
    ...Arguments,
  };
};
