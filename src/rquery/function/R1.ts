import { find, index } from "../query/find";
import { eq, even, first, last, odd } from "../query/search";
import { children, parent, parents, prev, siblings } from "../query/choice";
import { Log } from "../query/util";
import { each, grep, inArray, map, merge } from "../query/array";
import { lazy } from "../lazy";
import { contains, contents, has, not } from "../query/content";
import * as CONTROL from "../query/control";
import * as EVENT from "../query/event";
import * as ANIMATION from "../query/animation";

export class R<T> {
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
    return this.value as HTMLElement[];
  }
  toR() {
    return new R(this.value as HTMLElement[]);
  }
  isNothing() {
    return (
      (this.value as HTMLElement[]) === null ||
      (this.value as HTMLElement[]) === undefined
    );
  }
  rmap(f: Function) {
    return new R(f(this.value as HTMLElement[]));
  }
  flatMap<U>() {
    return (this.value as HTMLElement[] as unknown as Array<Array<U>>).flatMap(
      (x) => x
    );
  }
  // 모나드
  join() {
    return this.isNothing() ? R.of(null) : (this.value as HTMLElement[]);
  }
  chain<U>(f: Function): R<U> {
    return f(this.value as HTMLElement[]);
  }
  // 어플리케이티브
  ap<U>(b: U): R<T> {
    const f = this.value as HTMLElement[];
    if (f instanceof Function) return R.of((f as Function)(b));
    else return R.of(null);
  }
  // getOrElse
  getOrElse<U>(defaultValue: U) {
    return this.isNothing() ? defaultValue : (this.value as HTMLElement[]);
  }
  // 셀렉트
  first() {
    return first(this.value as HTMLElement[]);
  }
  last() {
    return last(this.value as HTMLElement[]);
  }
  odd() {
    return odd(this.value as HTMLElement[]);
  }
  even() {
    return even(this.value as HTMLElement[]);
  }
  eq(N: number) {
    return R.of(eq)
      .ap(this.value as HTMLElement[])
      .ap(N);
  }
  // 인접 관계 선택자
  parent() {
    return parent(this.value as HTMLElement[]);
  }
  parents() {
    return parents(this.value as HTMLElement[]);
  }
  children() {
    return children(this.value as HTMLElement[]);
  }
  siblings() {
    return siblings(this.value as HTMLElement[]);
  }
  prev() {
    return prev(this.value as HTMLElement[]);
  }
  next() {
    return prev(this.value as HTMLElement[]);
  }
  // 찾기
  index(s: string) {
    return R.of(index)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  find(s: string) {
    return R.of(find)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  contains(s: string) {
    return R.of(contains)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  // is(s: string) {
  //   return R.of(is)
  //     .ap(this.value as HTMLElement[])
  //     .ap(s);
  // }
  // 배열 관련
  each(f: Function) {
    return R.of(each)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  map(f: Function) {
    return R.of(map)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  grep(f: Function) {
    return R.of(grep)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  filter(f: Function) {
    return R.of(grep)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  inArray(node: R<HTMLElement[]>, s?: number) {
    return R.of(inArray)
      .ap(node)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  merge<T>(node: R<T>) {
    return R.of(merge)
      .ap(this.value as HTMLElement[])
      .ap(node);
  }
  // 콘텐츠 탐색 선택자
  has(s: string) {
    return R.of(has)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }
  contents() {
    return R.of(contents).ap(this.value as HTMLElement[]);
  }
  not(s: string) {
    return R.of(not)
      .ap(this.value as HTMLElement[])
      .ap(s);
  }

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
  // 이벤트
  on = (S: keyof GlobalEventHandlersEventMap, f: Function) => {
    return R.of(EVENT.on)
      .ap(this.value as HTMLElement[])
      .ap(S)
      .ap(f);
  };
  off(S: keyof GlobalEventHandlersEventMap, f: Function) {
    return R.of(EVENT.off)
      .ap(this.value as HTMLElement[])
      .ap(S)
      .ap(f);
  }

  /* 애니메이션

  */
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

  //개발용 유틸
  log() {
    return Log(this.value as HTMLElement[]);
  }

  first_of_type() {
    return this.first();
  }
  last_of_type() {
    return this.last();
  }
  /* 마우스 이벤트

  */
  click(f: (e: Event) => void) {
    return R.of(EVENT.click)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  dbclick(f: (e: Event) => void) {
    return R.of(EVENT.dbclick)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mouseout(f: (e: Event) => void) {
    return R.of(EVENT.mouseout)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mouseover(f: (e: Event) => void) {
    return R.of(EVENT.mouseover)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  hover(f: (e: Event) => void) {
    return R.of(EVENT.hover)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mousedown(f: (e: Event) => void) {
    return R.of(EVENT.mousedown)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mouseup(f: (e: Event) => void) {
    return R.of(EVENT.mouseup)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mouseenter(f: (e: Event) => void) {
    return R.of(EVENT.mouseenter)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mouseleave(f: (e: Event) => void) {
    return R.of(EVENT.mouseleave)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  mousemove(f: (e: Event) => void) {
    return R.of(EVENT.mousemove)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  scroll(f: (e: Event) => void) {
    return R.of(EVENT.scroll)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }

  focus(f: (e: Event) => void) {
    return R.of(EVENT.focus)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  focusin(f: (e: Event) => void) {
    return R.of(EVENT.focusin)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  focusout(f: (e: Event) => void) {
    return R.of(EVENT.focusout)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  blur(f: (e: Event) => void) {
    return R.of(EVENT.blur)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  change(f: (e: Event) => void) {
    return R.of(EVENT.change)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  keypress(f: (e: Event) => void) {
    return R.of(EVENT.keypress)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  keydown(f: (e: Event) => void) {
    return R.of(EVENT.keydown)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
  keyup(f: (e: Event) => void) {
    return R.of(EVENT.keyup)
      .ap(this.value as HTMLElement[])
      .ap(f);
  }
}
