type Fn<T = unknown> = (...params: unknown[]) => T

export interface Type<T = unknown> extends Fn<T> {
  new (...params: unknown[]): T
}
