import {Content} from '../entities'

export type CreateContent = Omit<Content, 'id' | 'createdAt' | 'updatedAt'>
