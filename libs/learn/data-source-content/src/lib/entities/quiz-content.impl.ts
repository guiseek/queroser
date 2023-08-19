import {
  QuizContent,
  QuestionContent,
  Content,
} from '@queroser/learn/domain-content'
// import {QuestionContentImpl} from './question-content.impl'
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm'
import {ContentImpl} from './content.impl'

@Entity({name: 'quiz-contents'})
export class QuizContentImpl extends ContentImpl implements QuizContent {
  // @OneToMany(() => QuestionContentImpl, (q) => q.quiz)
  questions: QuestionContent[]

  @ManyToOne(() => ContentImpl)
  @JoinColumn()
  content: Content

  @Column()
  title: string
}
