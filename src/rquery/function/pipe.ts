// 파이프 함수
export const pipe =
  <T>(...fns: Function[]) =>
  (value: T) => {
    return [...fns].reduce((v, f) => f(v), value);
  };
