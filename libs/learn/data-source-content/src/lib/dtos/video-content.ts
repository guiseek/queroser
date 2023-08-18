import {ApiProperty} from '@nestjs/swagger'
import {
  Content,
  ContentType,
  MediaImage,
  VideoContent,
  VideoMimeType,
} from '@queroser/learn/domain-content'

export class VideoContentDto implements VideoContent {
  @ApiProperty()
  mimeType: VideoMimeType

  @ApiProperty()
  content: Content

  @ApiProperty()
  aspectRatio: number

  @ApiProperty()
  height: number

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
