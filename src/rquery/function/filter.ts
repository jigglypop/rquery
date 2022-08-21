// 사용자 정의 filter
export const filter = function <T>(f: Function, iter: Node[]) {
  const response = [];
  for (const i of iter) {
    if (f(i)) response.push(i);
  }
  return response;
};
