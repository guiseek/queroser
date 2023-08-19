import {Content, ContentType} from '@queroser/learn/domain-content'
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({name: 'contents'})
export class ContentImpl implements Content {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'enum',
    enum: ContentType,
  })
  contentType: ContentType

  @Column()
  status: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
