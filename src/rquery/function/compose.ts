// 컴포즈 함수
export const compose =
  <T>(...fns: Function[]) =>
  (value: T) => {
    return [...fns].reverse().reduce((v, f) => f(v), value);
  };
