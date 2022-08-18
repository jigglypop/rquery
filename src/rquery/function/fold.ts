// 사용자 정의 map
export const map = <T>(data: T[], f: Function) => {
  const _data = [];
  for (let i = 0; i < data.length; i++) {
    _data.push(f(data[i], i, data));
  }
  return _data;
};
