import {CreateQuizContentDto} from './create-quiz-content'
import {PartialType} from '@nestjs/swagger'
import {IsNotEmpty} from 'class-validator'

export class UpdateQuizContentDto extends PartialType(CreateQuizContentDto) {
  @IsNotEmpty()
  id: string
}
