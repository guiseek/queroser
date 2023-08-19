import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateQuestionContentDto} from './create-question-content'
import {IsString} from 'class-validator'

export class UpdateQuestionContentDto extends PartialType(
  CreateQuestionContentDto
) {
  @IsString()
  @ApiProperty()
  id: string
}
