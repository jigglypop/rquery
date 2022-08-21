export const range = function* (s: number, e?: number) {
  let i = e ? s : -1;
  while (i++ < (e ? e : s)) {
    yield i;
  }
};
