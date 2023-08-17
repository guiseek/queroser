import {Course, Lesson} from '@queroser/learn/domain-course'
import {CourseImpl} from './course.impl'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({name: 'lessons'})
export class LessonImpl implements Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @ManyToOne((type) => CourseImpl)
  @JoinColumn()
  course: Course

  @CreateDateColumn()
  updatedAt: Date

  @UpdateDateColumn()
  createdAt: Date
}
