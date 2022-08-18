export const range = function* (l: number) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};
