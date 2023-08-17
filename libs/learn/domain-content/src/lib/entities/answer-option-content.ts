import {Content} from './content'
import {QuestionContent} from './question-content'

export interface AnswerOptionContent extends Content {
  question: QuestionContent
  text: string
  isCorrect: boolean
}
