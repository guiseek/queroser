import {QuizContent} from './quiz-content'
import {QuestionType} from '../types'
import {Content} from './content'

export interface QuestionContent extends Content {
  title: string
  questionType: QuestionType
  // options: AnswerOptionContent[]
  quiz: QuizContent
}
