import {ApiProperty} from '@nestjs/swagger'
import {
  ContentType,
  QuestionContent,
  QuestionType,
  QuizContent,
} from '@queroser/learn/domain-content'

export class QuestionContentDto implements QuestionContent {
  @ApiProperty()
  id: string

  @ApiProperty()
  title: string

  @ApiProperty()
  questionType: QuestionType

  @ApiProperty()
  quiz: QuizContent

  @ApiProperty()
  contentType: ContentType

  @ApiProperty()
  status: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
