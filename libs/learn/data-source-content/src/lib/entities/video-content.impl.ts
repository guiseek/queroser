import {
  Content,
  MediaImage,
  VideoContent,
  VideoMimeType,
} from '@queroser/learn/domain-content'
import {Column, Entity, JoinColumn, OneToOne} from 'typeorm'
import {ContentImpl} from './content.impl'

@Entity({name: 'video-contents'})
export class VideoContentImpl extends ContentImpl implements VideoContent {
  @Column()
  height: number

  @Column()
  aspectRatio: number

  @Column({
    type: 'enum',
    enum: VideoMimeType,
  })
  mimeType: VideoMimeType

  @Column()
  timesPlayed: number

  @Column()
  duration: number

  @Column()
  path: string

  @Column()
  size: number

  @OneToOne(() => ContentImpl)
  @JoinColumn()
  content: Content

  @Column({default: ''})
  album: string

  @Column({default: ''})
  artist: string

  @Column({
    type: 'json',
    default: [],
  })
  artwork: MediaImage[]

  @Column()
  title: string
}
