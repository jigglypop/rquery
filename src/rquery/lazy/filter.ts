import { curry } from "../function/curry";

// 사용자 정의 map
export const filter = curry(function* <T>(f: Function, data: T[]) {
  const response = [];
  for (let i = 0; i < data.length; i++) {
    if (f(i)) yield response.push(i);
  }
  return response;
});
