import {
  ContentImpl,
  LanguageImpl,
  VideoContentImpl,
  AudioContentImpl,
  TextContentImpl,
  QuizContentImpl,
  QuestionContentImpl,
  AnswerOptionContentImpl,
  QuestionAnswerContentImpl,
} from './entities'
import {
  ContentRepository,
  LanguageRepository,
  AudioContentRepository,
  VideoContentRepository,
  TextContentRepository,
  QuizContentRepository,
} from '@queroser/learn/domain-content'
import {getProviderFactoryFor} from '@queroser/shared/util-data'
import {
  ContentRepositoryImpl,
  LanguageRepositoryImpl,
  VideoContentRepositoryImpl,
  AudioContentRepositoryImpl,
  TextContentRepositoryImpl,
  QuizContentRepositoryImpl,
} from './infrastructure'

export const dataSourceContent = {
  entities() {
    return [
      ContentImpl,
      LanguageImpl,
      VideoContentImpl,
      AudioContentImpl,
      TextContentImpl,
      QuizContentImpl,
      QuestionContentImpl,
      AnswerOptionContentImpl,
      QuestionAnswerContentImpl,
    ]
  },
  providers() {
    return [
      getProviderFactoryFor(
        ContentRepository,
        ContentRepositoryImpl,
        ContentImpl,
        VideoContentImpl,
        AudioContentImpl,
        TextContentImpl
      ),
      getProviderFactoryFor(
        LanguageRepository,
        LanguageRepositoryImpl,
        LanguageImpl
      ),
      getProviderFactoryFor(
        VideoContentRepository,
        VideoContentRepositoryImpl,
        VideoContentImpl
      ),
      getProviderFactoryFor(
        AudioContentRepository,
        AudioContentRepositoryImpl,
        AudioContentImpl
      ),
      getProviderFactoryFor(
        TextContentRepository,
        TextContentRepositoryImpl,
        TextContentImpl
      ),
      getProviderFactoryFor(
        QuizContentRepository,
        QuizContentRepositoryImpl,
        QuizContentImpl
      ),
    ]
  },
}
