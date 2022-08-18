export const reduce = (f: any, init: any) => (target: any) => {
  let acc = init;
  for (const cur of target) {
    acc = f(acc, cur);
  }
  return acc;
};
