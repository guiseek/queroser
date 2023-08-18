import {Content, ContentType} from '@queroser/learn/domain-content'
import {ApiProperty} from '@nestjs/swagger'

export class ContentDto implements Content {
  @ApiProperty()
  id: string

  @ApiProperty()
  contentType: ContentType

  @ApiProperty()
  status: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
