import {QuizContent, QuizContentRepository} from '@queroser/learn/domain-content'
import {BaseRepository} from '@queroser/shared/data-source'

export class QuizContentRepositoryImpl
  extends BaseRepository<QuizContent>
  implements QuizContentRepository {}
