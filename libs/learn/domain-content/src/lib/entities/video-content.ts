import {MediaContent} from './media-content'
import {VideoMimeType} from '../types'
import {Content} from './content'

export interface VideoContent extends Content, MediaContent {
  mimeType: VideoMimeType
  content: Content
  aspectRatio: number
  height: number
}
