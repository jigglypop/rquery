import { children, parent, prev } from "../query/select";
import { pipe } from "./pipe";

export class R<T> {
  constructor(private value: T) {}

  static of<U>(value: U) {
    return new R<U>(value);
  }

  get() {
    return this.value;
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(f: Function) {
    return new R(f(this.value));
  }

  // 모나드
  join() {
    return this.isNothing() ? R.of(null) : this.value;
  }

  chain<U>(f: Function): R<U> {
    return f(this.value);
  }

  fmap(f: Function) {
    return R.of(this.chain(f));
  }
  // 어플리케이티브
  ap<U>(b: U): R<any> {
    const f = this.value;
    if (f instanceof Function) return new R((f as Function)(b));
    else return new R(null);
  }
  // getOrElse
  getOrElse<U>(defaultValue: U) {
    return this.isNothing() ? defaultValue : this.value;
  }

  // 인접 관계 선택자
  parent() {
    return parent(this.value as any);
  }
  children() {
    return children(this.value as any);
  }
  prev() {
    return prev(this.value as any);
  }
}
