import {VideoContent} from '../entities'

export type CreateVideoContent = Omit<
  VideoContent,
  'id' | 'createdAt' | 'updatedAt'
>
