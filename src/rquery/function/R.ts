export class R<T> {
  constructor(private value: T) {}

  static of<U>(value: U) {
    return new R<U>(value);
  }

  getValue() {
    return this.value;
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
  // 어플리케이티브
  ap<U>(b: U): any {
    const f = this.value;
    if (f instanceof Function) return R.of((f as Function)(b));
    else return R.of(null);
  }
  // getOrElse
  getOrElse<U>(defaultValue: U) {
    return this.isNothing() ? defaultValue : this.value;
  }
}
