import {QuestionContent} from './question-content'
import {Content} from './content'

export interface QuizContent extends Content {
  title: string
  questions: QuestionContent[]
}
