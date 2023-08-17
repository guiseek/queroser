import {AudioContent} from '../entities'

export type CreateAudioContent = Omit<
  AudioContent,
  'id' | 'createdAt' | 'updatedAt'
>
