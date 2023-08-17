import {AudioContent} from '../entities'

export type UpdateAudioContent = Partial<AudioContent> &
  Pick<AudioContent, 'id'>
