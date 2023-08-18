import {Language} from '@queroser/learn/domain-content'
import {EnvSide} from '@queroser/shared/util-data'
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({name: 'languages'})
export class LanguageImpl implements Language {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    type: String,
  })
  side: EnvSide

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
