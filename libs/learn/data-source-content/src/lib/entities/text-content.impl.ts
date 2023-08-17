import {Content, TextContent} from '@queroser/learn/domain-content'
import {Column, Entity, JoinColumn, OneToOne} from 'typeorm'
import {ContentImpl} from './content.impl'

@Entity({name: 'text-contents'})
export class TextContentImpl extends ContentImpl implements TextContent {
  @Column()
  length: number

  @Column()
  timeForReading: number

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

  @Column()
  text: string
}
