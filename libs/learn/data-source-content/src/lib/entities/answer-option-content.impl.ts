import {Column, ManyToOne, JoinColumn, Entity} from 'typeorm'
import {QuestionContentImpl} from './question-content.impl'
import {ContentImpl} from './content.impl'
import {
  QuestionContent,
  AnswerOptionContent,
} from '@queroser/learn/domain-content'

@Entity({name: 'answer-option-contents'})
export class AnswerOptionContentImpl
  extends ContentImpl
  implements AnswerOptionContent
{
  @ManyToOne(() => QuestionContentImpl)
  @JoinColumn()
  question: QuestionContent

  @Column()
  text: string

  @Column({
    default: false,
  })
  isCorrect: boolean
}
