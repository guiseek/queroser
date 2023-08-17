import {VideoContent, VideoMimeType} from '@queroser/learn/domain-content'
import {ContentImpl} from './content.impl'
import {Column} from 'typeorm'

export class VideoContentImpl extends ContentImpl implements VideoContent {
  @Column()
  height: number

  @Column()
  aspectRatio: number

  @Column({type: String})
  mimeType: VideoMimeType

  @Column()
  timesPlayed: number

  @Column()
  duration: number

  @Column()
  path: string

  @Column()
  size: number

  @Column({default: ''})
  album: string

  @Column({default: ''})
  artist: string

  @Column({default: []})
  artwork: readonly MediaImage[]

  @Column()
  title: string
}
