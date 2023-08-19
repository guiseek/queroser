import {Content} from './content'

export interface QuizContent extends Content {
  title: string
  content: Content
  // questions: QuestionContent[]
}
