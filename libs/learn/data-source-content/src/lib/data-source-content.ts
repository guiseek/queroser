import {
  ContentImpl,
  LanguageImpl,
  VideoContentImpl,
  AudioContentImpl,
  TextContentImpl,
} from './entities'
import {
  ContentRepository,
  LanguageRepository,
  AudioContentRepository,
  VideoContentRepository,
  TextContentRepository,
} from '@queroser/learn/domain-content'
import {getProviderFactoryFor} from '@queroser/shared/util-data'
import {
  ContentRepositoryImpl,
  LanguageRepositoryImpl,
  VideoContentRepositoryImpl,
  AudioContentRepositoryImpl,
  TextContentRepositoryImpl,
} from './infrastructure'

export const dataSourceContent = {
  entities() {
    return [
      LanguageImpl,
      ContentImpl,
      VideoContentImpl,
      AudioContentImpl,
      TextContentImpl,
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
    ]
  },
}
