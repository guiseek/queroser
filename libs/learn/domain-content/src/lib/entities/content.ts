import {ContentType} from '../types'

export class Content {
  id: string
  contentType: ContentType
  status: boolean
  createdAt: Date
  updatedAt: Date
}
