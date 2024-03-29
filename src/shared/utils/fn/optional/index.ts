/* eslint-disable @typescript-eslint/no-non-null-assertion */

export class Optional<T> {
  constructor(public readonly value?: T) {}

  static empty = <T>(): Optional<T> => new Optional<T>()

  static ofNullable = <T>(value: T): Optional<T> => {
    return value !== null || typeof value !== undefined ? Optional.of(value) : Optional.empty<T>()
  }

  static of = <T>(value: T): Optional<T> => new Optional(Optional.checkNotNull(value))

  isEmpty = (): boolean => this.value === null || this.value === undefined

  isPresent = (): boolean => this.value !== null && typeof this.value !== 'undefined'

  get = (): T => Optional.checkNotNull(this.value!)

  or = (defaultValue: T): T => (this.value ? this.value : defaultValue)

  orNothing = (): T | undefined => (this.isPresent() ? this.value : undefined)

  map = <R>(mapper: (value: T) => R): Optional<R> =>
    this.isPresent() ? Optional.ofNullable(mapper(this.value!)) : Optional.empty()

  ifPresent = (fn: (value: T | null) => void): void => {
    if (this.isPresent()) {
      fn(this.value!)
    }
  }

  private static checkNotNull<T>(value: T): T {
    if (value === null || typeof value === 'undefined') {
      throw new TypeError('')
    }

    return value
  }
}

export const empty = <T>(): Optional<T> => Optional.empty()

export const fromNullable = <T>(value: T): Optional<T> => new Optional<T>(value)
