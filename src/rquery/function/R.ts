import { contains, find, index, is } from "../query/find";
import { eq, even, first, last, odd } from "../query/search";
import { children, parent, prev } from "../query/choice";
import { Log } from "../query/util";

export class R<T> {
  constructor(private value: T) {}

  static of<U>(value: U) {
    return new R<U>(value);
  }
  get() {
    return this.value;
  }
  toR() {
    return new R(this.value);
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
  // 셀렉트
  first_of_type() {}
  first() {
    return first(this.value);
  }
  last() {
    return last(this.value);
  }
  odd() {
    return odd(this.value);
  }
  even() {
    return even(this.value);
  }
  eq(N: number) {
    return R.of(eq).ap(this.value).ap(N);
  }
  // 인접 관계 선택자
  parent() {
    return parent(this.value);
  }
  children() {
    return children(this.value);
  }
  prev() {
    return prev(this.value);
  }
  next() {
    return prev(this.value);
  }
  // // 찾기
  index(s: string) {
    return R.of(index).ap(this.value).ap(s);
  }
  find(s: string) {
    return R.of(find).ap(this.value).ap(s);
  }
  contains(s: string) {
    return R.of(contains).ap(this.value).ap(s);
  }
  is(s: string) {
    return R.of(is).ap(this.value).ap(s);
  }

  //개발용 유틸
  log() {
    return Log(this.value);
  }
}
