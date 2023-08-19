import {CreateAudioContentDto} from './create-audio-content'
import {PartialType} from '@nestjs/swagger'
import {IsString} from 'class-validator'

export class UpdateAudioContentDto extends PartialType(CreateAudioContentDto) {
  @IsString()
  id: string
}
