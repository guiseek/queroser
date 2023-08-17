import {Content} from '../entities'

export type UpdateContent = Partial<Content> & Pick<Content, 'id'>
