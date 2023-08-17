import {Content, ContentType} from '@queroser/learn/domain-content'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({name: 'contents'})
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
