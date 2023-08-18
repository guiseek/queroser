import {PageMeta, PageMetaParams} from '../interfaces'

export class PageMetaDto implements PageMeta {
  page: number
  take: number
  itemCount: number
  pageCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean

  constructor({pageOptions, itemCount}: PageMetaParams) {
    this.page = pageOptions.page ?? 0
    this.take = pageOptions.take ?? 10
    this.itemCount = itemCount
    this.pageCount = Math.ceil(this.itemCount / this.take)
    this.hasPreviousPage = this.page > 1
    this.hasNextPage = this.page < this.pageCount
  }
}
