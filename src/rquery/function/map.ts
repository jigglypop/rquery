// 사용자 정의 map
export const map = <T>(data: Array<T>, f: Function) => {
  const _data = [];
  for (let i = 0; i < data.length; i++) {
    _data.push(f(data[i], i, data));
  }
  return _data;
};

export const each = <T>(data: Array<T>, f: Function) => {
  for (let i = 0; i < data.length; i++) {
    f(data[i], i, data);
  }
  return data;
};
