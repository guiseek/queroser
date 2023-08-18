import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateTextContentDto} from './create-text-content'
import {IsUUID} from 'class-validator'

export class UpdateTextContentDto extends PartialType(CreateTextContentDto) {
  @IsUUID()
  @ApiProperty()
  id: string
}
