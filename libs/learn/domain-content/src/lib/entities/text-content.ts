import {Content} from './content'

export interface TextContent extends Content {
  content: string
  length: number
  timeForReading: number
}
