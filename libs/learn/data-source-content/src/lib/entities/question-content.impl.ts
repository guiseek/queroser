import {
  QuizContent,
  QuestionType,
  QuestionContent,
} from '@queroser/learn/domain-content'
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm'
import {QuizContentImpl} from './quiz-content.impl'
import {ContentImpl} from './content.impl'

@Entity({name: 'question-contents'})
export class QuestionContentImpl
  extends ContentImpl
  implements QuestionContent
{
  @Column()
  title: string

  @Column({
    type: 'enum',
    enum: QuestionType,
  })
  questionType: QuestionType

  // @OneToMany(() => AnswerOptionContentImpl, (ao) => ao.question)
  // options: AnswerOptionContent[]

  @ManyToOne(() => QuizContentImpl)
  @JoinColumn()
  quiz: QuizContent
}
