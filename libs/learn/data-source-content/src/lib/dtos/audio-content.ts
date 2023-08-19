import {ApiProperty} from '@nestjs/swagger'
import {
  Content,
  MediaImage,
  AudioContent,
  AudioMimeType,
  ContentType,
} from '@queroser/learn/domain-content'

export class AudioContentDto implements AudioContent {
  @ApiProperty()
  mimeType: AudioMimeType

  @ApiProperty()
  content: Content

  @ApiProperty()
  id: string

  @ApiProperty()
  contentType: ContentType

  @ApiProperty()
  status: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  artwork: MediaImage[]

  @ApiProperty()
  title: string

  @ApiProperty()
  @ApiProperty()
  timesPlayed: number

  @ApiProperty()
  duration: number

  @ApiProperty()
  artist: string

  @ApiProperty()
  album: string

  @ApiProperty()
  path: string

  @ApiProperty()
  size: number
}
