import {IsEnum, IsString, IsBoolean, IsNotEmpty} from 'class-validator'
import {QuizContentDto} from './quiz-content'
import {ApiProperty} from '@nestjs/swagger'
import {
  QuizContent,
  ContentType,
  QuestionType,
  CreateQuestionContent,
} from '@queroser/learn/domain-content'
import {Type} from 'class-transformer'

export class CreateQuestionContentDto implements CreateQuestionContent {
  @IsString()
  @ApiProperty()
  title: string

  @IsEnum(QuestionType)
  @ApiProperty()
  questionType: QuestionType

  // @Type(() => QuizContentDto)
  @IsNotEmpty()
  @ApiProperty()
  quiz: QuizContent

  @IsEnum(ContentType)
  @ApiProperty()
  contentType: ContentType

  @IsBoolean()
  @ApiProperty()
  status: boolean
}
