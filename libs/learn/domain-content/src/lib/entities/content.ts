import {ContentType} from '../types'

export interface Content {
  id: string
  contentType: ContentType
  status: boolean
  createdAt: Date
  updatedAt: Date
}
