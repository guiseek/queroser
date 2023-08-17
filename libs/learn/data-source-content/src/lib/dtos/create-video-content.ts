import {
  Content,
  MediaImage,
  ContentType,
  VideoMimeType,
  CreateVideoContent,
} from '@queroser/learn/domain-content'
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class CreateVideoContentDto implements CreateVideoContent {
  @IsString()
  @ApiProperty()
  contentType: ContentType

  @IsBoolean()
  @ApiProperty()
  status: boolean

  @IsString()
  @ApiProperty()
  mimeType: VideoMimeType

  @IsString()
  @ApiProperty()
  content: Content

  @IsNumber()
  @ApiProperty()
  aspectRatio: number

  @IsNumber()
  @ApiProperty()
  height: number

  @IsArray()
  @ApiProperty()
  artwork: MediaImage[]

  @IsString()
  @ApiProperty()
  title: string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  timesPlayed: number

  duration: number
  artist: string
  album: string
  path: string
  size: number
  name: string
}
