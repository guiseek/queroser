import {Content, ContentType} from '@queroser/learn/domain-content'
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export class ContentImpl implements Content {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: String})
  contentType: ContentType

  @Column()
  status: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
