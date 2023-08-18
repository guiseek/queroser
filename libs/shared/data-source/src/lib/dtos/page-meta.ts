import {PageMeta, PageMetaParams} from '@queroser/shared/util-data'
import {ApiProperty} from '@nestjs/swagger'

export class PageMetaDto implements PageMeta {
  @ApiProperty()
  readonly page: number

  @ApiProperty()
  readonly take: number

  @ApiProperty()
  readonly itemCount: number

  @ApiProperty()
  readonly pageCount: number

  @ApiProperty()
  readonly hasPreviousPage: boolean

  @ApiProperty()
  readonly hasNextPage: boolean

  constructor({pageOptions, itemCount}: PageMetaParams) {
    this.page = pageOptions.page ?? 1
    this.take = pageOptions.take ?? 10
    this.itemCount = itemCount
    this.pageCount = Math.ceil(this.itemCount / this.take)
    this.hasPreviousPage = this.page > 1
    this.hasNextPage = this.page < this.pageCount
  }
}
