import {
  Content,
  ContentType,
  CreateTextContent,
} from '@queroser/learn/domain-content'
import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean, IsNumber, IsString} from 'class-validator'

export class CreateTextContentDto implements CreateTextContent {
  @IsString()
  @ApiProperty()
  text: string

  @IsNumber()
  @ApiProperty()
  length: number

  @IsString()
  @ApiProperty()
  content: Content

  @IsNumber()
  @ApiProperty()
  timeForReading: number

  @IsString()
  @ApiProperty()
  contentType: ContentType

  @IsBoolean()
  @ApiProperty()
  status: boolean
}
