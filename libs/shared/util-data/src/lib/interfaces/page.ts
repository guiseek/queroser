import {PageMeta} from './page-meta'

export interface Page<T> {
  readonly data: T[]
  readonly meta: PageMeta
}
