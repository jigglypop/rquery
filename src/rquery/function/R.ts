import * as FIND from "../query/find";
import * as SEARCH from "../query/search";
import * as CHOICE from "../query/choice";
import { Log } from "../query/util";
import * as ARRAY from "../query/array";
import { lazy } from "../lazy";
import * as CONTENT from "../query/content";
import * as CONTROL from "../query/control";
import * as EVENT from "../query/event";
import * as ANIMATION from "../query/animation";

export class R<T> implements IR<T> {
  [x: string]: Function | IRProps;

  constructor(private value: IRProps) {}

  static of(value: IRProps) {
    return new R<IRProps>(value);
  }

  static extends(funcProp: IFuncProp) {
    for (let fname in funcProp) {
      R.prototype[fname] = funcProp[fname];
    }
    return;
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
  flatMap<U>() {
    return (this.value as HTMLElement[] as unknown as Array<Array<U>>).flatMap(
      (x) => x
    );
  }
  // 모나드
  join() {
    return this.isNothing() ? R.of(null) : this.value;
  }
  chain(f: Function) {
    return f(this.value);
  }
  // 어플리케이티브
  ap<U>(b: U) {
    const f = this.value;
    if (f instanceof Function) return R.of((f as Function)(b));
    else return R.of(null);
  }
  // getOrElse
  getOrElse<U>(defaultValue: U) {
    return this.isNothing() ? defaultValue : this.value;
  }
  // 셀렉트
  first() {
    return SEARCH.first(this.value as HTMLElement[]);
  }
  last() {
    return SEARCH.last(this.value as HTMLElement[]);
  }
  odd() {
    return SEARCH.odd(this.value as HTMLElement[]);
  }
  even() {
    return SEARCH.even(this.value as HTMLElement[]);
  }
  eq(N: number) {
    return R.of(SEARCH.eq).ap(this.value).ap(N);
  }
  // 인접 관계 선택자
  parent() {
    return CHOICE.parent(this.value as HTMLElement[]);
  }
  parents() {
    return CHOICE.parents(this.value as HTMLElement[]);
  }
  children() {
    return CHOICE.children(this.value as HTMLElement[]);
  }
  siblings() {
    return CHOICE.siblings(this.value as HTMLElement[]);
  }
  prev() {
    return CHOICE.prev(this.value as HTMLElement[]);
  }
  next() {
    return CHOICE.prev(this.value as HTMLElement[]);
  }

  // 찾기
  index(s: string) {
    return R.of(FIND.index)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  find(s: string) {
    return R.of(FIND.find)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }

  // content
  // 콘텐츠 탐색 선택자
  contains(s: string) {
    return R.of(CONTENT.contains)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  has(s: string) {
    return R.of(CONTENT.has)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  contents() {
    return R.of(CONTENT.contents).ap(this.value as HTMLElement[]);
  }
  not(s: string) {
    return R.of(CONTENT.not)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  // array
  // 배열 관련
  each(f: Function) {
    return R.of(ARRAY.each)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  map(f: Function) {
    return R.of(ARRAY.map)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  grep(f: Function) {
    return R.of(ARRAY.grep)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  filter(f: Function) {
    return R.of(ARRAY.grep)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  inArray(node: R<HTMLElement[]>, s?: number) {
    return R.of(ARRAY.inArray)
      .ap(node)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  merge<T>(node: R<T>) {
    return R.of(ARRAY.merge)
      .ap(this.value as HTMLElement[])
      .ap(node);
  }

  // control
  // 객체 조작 메서드
  css(property: string | ICssObj, value?: string) {
    return R.of(CONTROL.css)
      .ap(this.value as HTMLElement[])
      .ap(property)
      .ap(value);
  }
  attr<U>(property: AttrProperty<U> | IAttrObj<U>, value?: Attr) {
    return R.of(CONTROL.attr)
      .ap(this.value as HTMLElement[])
      .ap(property)
      .ap(value);
  }
  removeAttr(S: string) {
    return R.of(CONTROL.removeAttr)
      .ap(this.value as HTMLElement[])
      .ap(S);
  }
  addClass(S: string) {
    return R.of(CONTROL.addClass)
      .ap(this.value as HTMLElement[])
      .ap(S);
  }
  removeClass(S: string) {
    return R.of(CONTROL.removeClass)
      .ap(this.value as HTMLElement[])
      .ap(S);
  }
  text(S?: string) {
    return R.of(CONTROL.text)
      .ap(this.value as HTMLElement[])
      .ap(S);
  }
  html(S?: string) {
    return R.of(CONTROL.html)
      .ap(this.value as HTMLElement[])
      .ap(S);
  }
  val(S?: string) {
    return R.of(CONTROL.val)
      .ap(this.value as HTMLElement[])
      .ap(S);
  }

  // event
  // 이벤트
  on(S: keyof GlobalEventHandlersEventMap, f: Function) {
    return R.of(EVENT.on)
      .ap(this.value as HTMLElement[])
      .ap(S)
      .ap(f);
  }
  off(S: keyof GlobalEventHandlersEventMap, f: Function) {
    return R.of(EVENT.off)
      .ap(this.value as HTMLElement[])
      .ap(S)
      .ap(f);
  }

  // animation
  // 애니메이션
  hide(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.hide)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  show(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.show)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  toggle(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.toggle)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  slideUp(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.slideUp)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  slideDown(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.slideDown)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  slideToggle(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.slideToggle)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  fadeOut(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.fadeOut)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  fadeIn(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.fadeIn)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }
  fadeToggle(speed?: number, easing?: IErasing, f?: Function) {
    return R.of(ANIMATION.fadeToggle)
      .ap(this.value as HTMLElement[])
      .ap(speed)
      .ap(easing)
      .ap(f);
  }

  // lazy
  lazy() {
    const value = this.value as HTMLElement[];
    return {
      each(f: Function) {
        return R.of(lazy.each).ap(f).ap(value);
      },
      map(f: Function) {
        return R.of(lazy.map).ap(f).ap(value);
      },
    };
  }
}
