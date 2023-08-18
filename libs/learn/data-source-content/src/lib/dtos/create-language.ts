import {CreateLanguage} from '@queroser/learn/domain-content'
import {EnvSide} from '@queroser/shared/util-data'
import {ApiProperty} from '@nestjs/swagger'
import {IsString} from 'class-validator'

export class CreateLanguageDto implements CreateLanguage {
  @IsString()
  @ApiProperty()
  name: string

  @IsString()
  @ApiProperty()
  side: EnvSide
}
