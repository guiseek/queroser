import {ContentType, QuizContent} from '@queroser/learn/domain-content'
import {ApiProperty} from '@nestjs/swagger'
import {ContentDto} from './content'

export class QuizContentDto implements QuizContent {
  @ApiProperty()
  title: string

  @ApiProperty()
  id: string

  @ApiProperty()
  contentType: ContentType

  @ApiProperty()
  content: ContentDto

  @ApiProperty()
  status: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
