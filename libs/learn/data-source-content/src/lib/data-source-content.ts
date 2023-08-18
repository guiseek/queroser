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
  VideoContentRepository,
} from '@queroser/learn/domain-content'
import {getProviderFactoryFor} from '@queroser/shared/util-data'
import {
  ContentRepositoryImpl,
  VideoContentRepositoryImpl,
  LanguageRepositoryImpl,
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
    ]
  },
}
