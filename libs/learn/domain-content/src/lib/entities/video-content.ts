import {MediaContent} from './media-content'
import {VideoMimeType} from '../types'
import {Content} from './content'

export interface VideoContent extends Content, MediaContent {
  height: number
  aspectRatio: number
  mimeType: VideoMimeType
}
