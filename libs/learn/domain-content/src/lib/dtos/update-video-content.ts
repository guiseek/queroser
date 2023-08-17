import {VideoContent} from '../entities'

export type UpdateVideoContent = Partial<VideoContent> &
  Pick<VideoContent, 'id'>
