export class R<T> {
  constructor(private value: T) {}

  static of<U>(value: U) {
    return new R<U>(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(f: Function): R<T> | R<null> {
    return this.isNothing() ? R.of(null) : R.of(f(this.value));
  }

  // 모나드
  join() {
    return this.isNothing() ? R.of(null) : this.value;
  }

  chain(f: Function): T | R<null> | null {
    return this.map(f).join();
  }

  fmap(f: Function) {
    return R.of(this.chain(f));
  }
}
