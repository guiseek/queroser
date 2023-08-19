import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm'
import {Learner} from '@queroser/account/domain-user'
import {
  QuizContent,
  QuestionContent,
  QuestionAnswerContent,
} from '@queroser/learn/domain-content'
import {LearnerImpl} from '@queroser/account/data-source-user'
import {QuestionContentImpl} from './question-content.impl'
import {QuizContentImpl} from './quiz-content.impl'
import {ContentImpl} from './content.impl'

@Entity({name: 'question-answer-contents'})
export class QuestionAnswerContentImpl
  extends ContentImpl
  implements QuestionAnswerContent
{
  @ManyToOne(() => LearnerImpl)
  @JoinColumn()
  leaner: Learner

  @ManyToOne(() => QuizContentImpl)
  @JoinColumn()
  quiz: QuizContent

  @ManyToOne(() => QuestionContentImpl)
  @JoinColumn()
  question: QuestionContent

  @Column()
  answer: string
}
