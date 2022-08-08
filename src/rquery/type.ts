export interface IMaybe<T> {
  isJust(): boolean;
  isNothing(): boolean;
  getOrElse(defaultValue: T): T;
}
