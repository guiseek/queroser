import {Learner, User} from '@queroser/account/domain-user'
import {UserImpl} from './user.impl'
import {
  Entity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({name: 'learners'})
export class LearnerImpl implements Learner {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => UserImpl)
  @JoinColumn()
  user: User

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string
}
