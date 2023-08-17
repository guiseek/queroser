import {Learner} from '@queroser/account/api-user'
import {QuestionContent} from './question-content'
import {QuizContent} from './quiz-content'
import {Content} from './content'

export interface QuestionAnswerContent extends Content {
  leaner: Learner
  quiz: QuizContent
  question: QuestionContent
  answer: string
}
