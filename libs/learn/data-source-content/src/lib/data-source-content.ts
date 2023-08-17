import {ContentImpl, LanguageImpl, VideoContentImpl} from './entities'

export const dataSourceContent = {
  entities() {
    return [LanguageImpl, ContentImpl, VideoContentImpl]
  },
  providers() {
    return []
  },
}
