export class Te<T> {
  constructor(private value: T) {}

  static of<U>(value: U) {
    return new Te<U>(value);
  }
}
