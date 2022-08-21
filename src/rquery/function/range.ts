export const range = (s: number, e?: number) => {
  const result = [];
  let i = e ? s : 0;
  while (i++ < (e ? e : s)) {
    result.push(i);
  }
  return result;
};
