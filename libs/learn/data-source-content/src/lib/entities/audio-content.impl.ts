import {
  Content,
  MediaImage,
  AudioContent,
  AudioMimeType,
} from '@queroser/learn/domain-content'
import {Column, Entity, JoinColumn, OneToOne} from 'typeorm'
import {ContentImpl} from './content.impl'

@Entity({name: 'audio-contents'})
export class AudioContentImpl extends ContentImpl implements AudioContent {
  @Column({
    type: 'enum',
    enum: AudioMimeType,
  })
  mimeType: AudioMimeType

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
