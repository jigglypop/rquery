// 사용자 정의 map
export const filter = <T>(f: Function, iter: any) => {
  const response = [];
  for (const i of iter) {
    if (f(i)) response.push(i);
  }
  return response;
};
