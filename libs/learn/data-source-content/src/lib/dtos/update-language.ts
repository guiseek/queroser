import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateLanguageDto} from './create-language'
import {IsUUID} from 'class-validator'

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
  @IsUUID()
  @ApiProperty()
  id: string
}
