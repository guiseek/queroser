import {ApiProperty} from '@nestjs/swagger'
import {Content, ContentType, TextContent} from '@queroser/learn/domain-content'

export class TextContentDto implements TextContent {
  @ApiProperty()
  text: string

  @ApiProperty()
  length: number

  @ApiProperty()
  content: Content

  @ApiProperty()
  timeForReading: number

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
