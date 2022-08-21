import { find, index, is } from "../query/find";
import { eq, even, first, last, odd } from "../query/search";
import { children, parent, parents, prev, siblings } from "../query/choice";
import { Log } from "../query/util";
import { each, grep, inArray, map, merge } from "../query/array";
import { lazy } from "../lazy";
import { contains, contents, has } from "../query/content";

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
  rmap(f: Function) {
    return new R(f(this.value));
  }
  flatMap<U>(f?: Function) {
    return (this.value as unknown as Array<Array<U>>).flatMap((x) => x);
  }
  // 모나드
  join() {
    return this.isNothing() ? R.of(null) : this.value;
  }
  chain<U>(f: Function): R<U> {
    return f(this.value);
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
  first() {
    return first(this.value);
  }
  last() {
    return last(this.value);
  }
  first_of_type() {
    return this.first();
  }
  last_of_type() {
    return this.last();
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
  parents() {
    return parents(this.value);
  }
  children() {
    return children(this.value);
  }
  siblings() {
    return siblings(this.value);
  }
  prev() {
    return prev(this.value);
  }
  next() {
    return prev(this.value);
  }
  // 찾기
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
  // 배열 관련
  each(f: Function) {
    return R.of(each).ap(this.value).ap(f);
  }
  map(f: Function) {
    return R.of(map).ap(this.value).ap(f);
  }
  grep(f: Function) {
    return R.of(grep).ap(this.value).ap(f);
  }
  filter(f: Function) {
    return R.of(grep).ap(this.value).ap(f);
  }
  inArray(node: R<Node>, s?: number) {
    return R.of(inArray).ap(node).ap(this.value).ap(s);
  }
  merge<T>(node: R<T>) {
    return R.of(merge).ap(this.value).ap(node);
  }
  // 콘텐츠 탐색 선택자
  has(s: string) {
    return R.of(has).ap(this.value).ap(s);
  }
  contents() {
    return R.of(contents).ap(this.value);
  }
  // lazy
  lazy() {
    const value = this.value;
    return {
      each(f: Function) {
        return R.of(lazy.each).ap(f).ap(value);
      },
      map(f: Function) {
        return R.of(lazy.map).ap(f).ap(value);
      },
    };
  }

  //개발용 유틸
  log() {
    return Log(this.value);
  }
}
