import {TextContent} from '../entities'

export type CreateTextContent = Omit<
  TextContent,
  'id' | 'createdAt' | 'updatedAt'
>
