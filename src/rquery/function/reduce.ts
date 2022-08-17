// 사용자 정의 map
export const reduce = <T>(f: Function, iter: any, acc?: any) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const i of iter) {
    acc = f(acc, i);
  }
  return acc;
};
