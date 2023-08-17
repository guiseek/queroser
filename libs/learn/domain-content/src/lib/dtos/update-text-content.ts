import {TextContent} from '../entities'

export type UpdateTextContent = Partial<TextContent> & Pick<TextContent, 'id'>
