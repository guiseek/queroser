import {Page} from '@queroser/shared/util-data'
import {ApiProperty} from '@nestjs/swagger'
import {IsArray} from 'class-validator'
import {PageMetaDto} from './page-meta'

export class PageDto<T> implements Page<T> {
  @IsArray()
  @ApiProperty({isArray: true})
  readonly data: T[]

  @ApiProperty({type: () => PageMetaDto})
  readonly meta: PageMetaDto

  constructor(data: T[], meta: PageMetaDto) {
    this.data = data
    this.meta = meta
  }
}
