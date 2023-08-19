import {ContentType, CreateQuizContent} from '@queroser/learn/domain-content'
import {IsEnum, IsBoolean, IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import { ContentDto } from './content'

export class CreateQuizContentDto implements CreateQuizContent {
  @IsNotEmpty()
  @ApiProperty()
  title: string

  @IsEnum(ContentType)
  @ApiProperty()
  contentType: ContentType

  @ApiProperty()
  content: ContentDto

  @IsBoolean()
  @ApiProperty()
  status: boolean
}
