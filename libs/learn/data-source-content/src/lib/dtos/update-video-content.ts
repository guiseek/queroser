import {UpdateVideoContent} from '@queroser/learn/domain-content'
import {CreateVideoContentDto} from './create-video-content'
import {PartialType} from '@nestjs/mapped-types'
import {IsNotEmpty} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class UpdateVideoContentDto
  extends PartialType(CreateVideoContentDto)
  implements UpdateVideoContent
{
  @IsNotEmpty()
  @ApiProperty()
  id: string
}
