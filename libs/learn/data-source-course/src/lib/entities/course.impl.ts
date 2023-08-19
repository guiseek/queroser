import {LanguageImpl} from '@queroser/learn/data-source-content'
import {Course} from '@queroser/learn/domain-course'
import {Language} from '@queroser/learn/domain-content'
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({name: 'courses'})
export class CourseImpl implements Course {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToOne(() => LanguageImpl)
  @JoinColumn()
  language: Language

  // @OneToMany(() => LessonImpl, (l) => l.course)
  // lessons: Lesson[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
