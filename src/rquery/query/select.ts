import { curry } from "../function/curry";
import { map } from "../function/each";
import { go } from "../function/go";
import { R } from "../function/R";

// 셀렉트 함수를 모아놓은 부분

// S를 : 를 기준으로 쪼개는 함수
const SplitS = curry((S: string, Obj: R<ICheckApp[]>) => {
  return map((Obj: ICheckApp) => {
    Obj.SArr = S.split(":");
    return Obj;
  }, Obj);
});

// #App 체크
const isApp = curry((ref: IRef, Obj: R<ICheckApp[]>) => {
  const cur = ref?.current;
  return map((_Obj: ICheckApp) => {
    _Obj.cur =
      _Obj.SArr[0] === "#App" ? cur : cur?.querySelectorAll(_Obj.SArr[0]);
    return _Obj;
  }, Obj);
});

// 언더바 파싱, 함수 이름 fname 세팅
const parseFname = (Obj: R<ICheckApp[]>) => {
  return map((_Obj: ICheckApp) => {
    const _tag =
      _Obj.SArr.length > 1 ? _Obj.SArr[1].replaceAll("-", "_") : null;
    _Obj.fname = _tag;
    return _Obj;
  }, Obj);
};

// 파라미터 파싱
const parseParam = (Obj: R<ICheckApp[]>) => {
  return map((_Obj: ICheckApp) => {
    _Obj.param = _Obj.fname
      ?.match(/\([a-zA-Z0-9]\)/gi)?.[0]
      .replaceAll(/\(|\)/gi, "");
    _Obj.fname = _Obj.fname?.replace(/\([a-zA-Z0-9]\)/gi, "");
    return _Obj;
  }, Obj);
};

// 객체 뽑기
const getCur = (Obj: R<ICheckApp[]>) => {
  return map((_Obj: ICheckApp) => {
    const cur = Array.from((_Obj.cur as NodeListOf<Element>) || []);
    return R.of(cur).get();
  }, Obj);
};

// array 분리
const flatArray = (R: R<ICheckApp[]>) => {
  return R.flatMap();
};

// #App 인지 체크
export const checkApp = curry((ref: IRef, S: string) => {
  return go(
    R.of([{ cur: null, SArr: [], param: null, fname: null }]),
    SplitS(S),
    isApp(ref),
    parseFname,
    parseParam,
    getCur,
    flatArray
  );
});
