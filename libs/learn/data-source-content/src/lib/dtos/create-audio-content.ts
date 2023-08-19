import {
  Content,
  MediaImage,
  ContentType,
  AudioMimeType,
  CreateAudioContent,
} from '@queroser/learn/domain-content'
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Type} from 'class-transformer'
import {ContentDto} from './content'

export class CreateAudioContentDto implements CreateAudioContent {
  @IsString()
  @ApiProperty()
  contentType: ContentType

  @IsBoolean()
  @ApiProperty()
  status: boolean

  @IsString()
  @ApiProperty()
  mimeType: AudioMimeType

  @ApiProperty()
  @Type(() => ContentDto)
  content: Content

  @IsNumber()
  @ApiProperty()
  aspectRatio: number

  @IsNumber()
  @ApiProperty()
  height: number

  @IsArray()
  @ApiProperty()
  @Type(() => MediaImage)
  artwork: MediaImage[]

  @IsString()
  @ApiProperty()
  title: string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  timesPlayed: number

  @IsNumber()
  @ApiProperty()
  duration: number

  @IsString()
  @IsOptional()
  @ApiProperty()
  artist: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  album: string

  @IsString()
  @ApiProperty()
  path: string

  @IsNumber()
  @ApiProperty()
  size: number

  @IsString()
  @ApiProperty()
  name: string
}
