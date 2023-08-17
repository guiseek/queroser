import {MediaContent} from './media-content'
import {AudioMimeType} from '../types'
import {Content} from './content'

export interface AudioContent extends Content, MediaContent {
  mimeType: AudioMimeType
  content: Content
}
