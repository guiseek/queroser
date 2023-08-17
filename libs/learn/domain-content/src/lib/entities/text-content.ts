import {Content} from './content'

export interface TextContent extends Content {
  text: string
  length: number
  content: Content
  timeForReading: number
}
