/// <reference types="react-scripts" />

/*
  query : R type
*/
// R 선언병힙
interface IR<T> {
  get(): IRProps;
  toR(): R<IRProps>;
  isNothing(): boolean;
  rmap(f: Function): R<Function<IRProps>>;
  flatMap<U>(): U[];
  join(): R<null> | IRProps;
  chain(f: Function): IRProps;
  ap<U>(b: U): R<T>;
  getOrElse<U>(defaultValue: U): IRProps | U;
  first(): R<HTMLElement[]>;
  last(): R<HTMLElement[]>;
  odd(): R<HTMLElement[]>;
  even(): R<HTMLElement[]>;
  eq(N: number): R<IRProps>;
  index(s: string): R<IRProps>;
  find(s: string): R<IRProps>;
  // content
  contains(s: string): R<IRProps>;
  has(s: string): R<IRProps>;
  contents(): R<IRProps>;
  not(s: string): R<IRProps>;
  // array
  each(f: Function): R<IRProps>;
  map(f: Function): R<IRProps>;
  grep(f: Function): R<IRProps>;
  filter(f: Function): R<IRProps>;
  inArray(node: R<HTMLElement[]>, s?: number): R<IRProps>;
  merge(node: R<HTMLElement[]>): R<IRProps>;
  // control
  css(property: string | ICssObj, value?: string): R<IRProps>;
  attr<U>(property: AttrProperty<U> | IAttrObj<U>, value?: Attr): R<IRProps>;
  removeAttr(S: string): R<IRProps>;
  addClass(S: string): R<IRProps>;
  removeClass(S: string): R<IRProps>;
  text(S?: string): R<IRProps>;
  html(S?: string): R<IRProps>;
  val(S?: string): R<IRProps>;
  // event
  on(S: keyof GlobalEventHandlersEventMap, f: Function): R<IRProps>;
  off(S: keyof GlobalEventHandlersEventMap, f: Function): R<IRProps>;
  // animation
  // 애니메이션
  hide(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  show(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  toggle(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  slideUp(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  slideDown(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  slideToggle(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  fadeOut(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  fadeIn(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  fadeToggle(speed?: number, easing?: IErasing, f?: Function): R<IRProps>;
  // lazy
  lazy(): {
    each(f: Function): R<IRProps>;
    map(f: Function): R<IRProps>;
  };
}
type Hook = Dispatch<HTMLElement | string>;
type IFuncProp = {
  [fname in string]: Function;
};
type IRProps =
  | string
  | HTMLElement[]
  | React.RefObject<HTMLElement>
  | ICheckApp[]
  | Element[]
  | null
  | undefined
  | Function
  | Generator<T>
  | Element;
/*
  훅
*/

type IFunction<T> = {
  [key in string]: T;
};

type I$ = (S: string | React.RefObject<HTMLElement>) => R<IRProps>;

type ICache<T> = {
  [key in string]: T;
};

interface IMemorize<T> {
  (key: T): R<T>;
  each: () => void;
  cache?: ICache<R<T>>;
}

type IRef = RefObject<HTMLElement>;

type IQuery = {
  set: (El: R<IEl>) => Node[];
  get: () => any;
  parent: () => IQuery;
  children: () => void;
  prev: () => void;
};

type ICheckApp = {
  cur: HTMLElement | null | NodeListOf<Element> | undefined;
  SArr: string[];
  param: string | null | undefined;
  fname: string | null | undefined;
};

type IDotAndParam = {
  eq: (N: number) => R<Node[]>;
};

type IDot = {
  first: () => R<Node[]>;
  last: () => R<Node[]>;
  first_of_type: () => R<Node[]>;
  last_of_type: () => R<Node[]>;
  odd: () => R<Node[]>;
  even: () => R<Node[]>;
};

type ISelectAll = {
  cur: HTMLElement | null;
  S_arr: string[];
};

/*
  query : array 타입
*/
type IArray = (RNodes: HTMLElement[]) => (f: Function) => R<HTMLElement[]>;
type IInArray = (
  node: R<HTMLElement>
) => (RNodes: HTMLElement[]) => (s?: number) => R<HTMLElement[]>;
type IMerge = (
  RNodes: HTMLElement[]
) => (nodes: R<HTMLElement[]>) => R<HTMLElement[]>;
/*
  query : choice 타입
*/
type IParent = (RNodes: HTMLElement[]) => R<HTMLElement[]>;

/*
  query : search 타입
*/
type ISearch = (RNodes: HTMLElement[]) => R<HTMLElement[]>;
type ISearchEq = (RNodes: HTMLElement[]) => (N: number) => R<HTMLElement[]>;

/*
  query : find 타입
*/
type IFind = (RNodes: HTMLElement[]) => (S: string) => R<HTMLElement[]>;
/*
  query : control 타입
*/
type IControl = (RNodes: HTMLElement[]) => (S?: string) => R<HTMLElement[]>;
type IControlClass = (RNodes: HTMLElement[]) => (S: string) => R<HTMLElement[]>;
type ICss = (
  RNodes: HTMLElement[]
) => (P: CSSStyleDeclaration | ICssObj) => (value?: string) => R<HTMLElement[]>;
type IAttr = (
  RNodes: HTMLElement[]
) => (
  P: React.AllHTMLAttributes<U> | IAttrObj<U>
) => (value?: string) => R<HTMLElement[]>;
type IRemoveAttr = (
  RNodes: HTMLElement[]
) => (attr: keyof React.AllHTMLAttributes<U>) => R<HTMLElement[]>;
/*
  query : content 타입
*/
type IHas = (RNodes: HTMLElement[]) => (S: string) => R<HTMLElement[]>;
type IContents = (RNodes: HTMLElement[]) => R<HTMLElement[]>;
type INot = (RNodes: HTMLElement[]) => (S: string) => R<HTMLElement[]>;

type IKeyOfQuery = typeof R[keyof typeof R];

type CSSProperty = keyof CSSStyleDeclaration;

type ICssObj = {
  [key in CSSProperty]?: string;
};

type AttrProperty<T> = keyof React.AllHTMLAttributes<T>;

type IAttrObj<T> = {
  [key in AttrProperty<T>]?: string;
};

type IOn = (
  RNodes: HTMLElement[]
) => (
  event: keyof GlobalEventHandlersEventMap
) => (f: (e: Event) => void) => R<T>;

type IOff = IOn;

type IMouseEvent = (RNodes: any) => (f: (e: Event) => void) => any;

type IErasing = "linear" | "ease" | "ease -in" | "ease-out" | "ease-in-out";

type IEffect = <T>(
  RNodes: R<HTMLElement[]>
) => (speed?: number) => (erasing?: keyof IErasing) => (f?: Function) => R<T>;

type IEffectChild = (
  node: HTMLElement
) => (speed?: number) => (erasing?: keyof IErasing) => (f?: Function) => void;

type IEffectHide = (
  node: HTMLElement
) => (
  speed?: number
) => (erasing?: keyof IErasing) => (f?: Function) => (height?: number) => void;

/* 
  ajax type
*/
type IAjaxDataType = "html" | "xml" | "json" | "text" | "jsonp";
type IAjaxProps<T> = {
  url: string;
  type?: string;
  data?: T;
  dataType?: IAjaxDataType;
  success: Function;
  error: Function;
};
type IAjax = ({
  url,
  type,
  data,
  dataType,
  success,
  error,
}: IAjaxProps<T>) => any;
