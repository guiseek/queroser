import {AudioContent, Content, TextContent, VideoContent} from '../entities'
import {ContentRelation} from './content-relation'

export type ContentByRelation<T extends ContentRelation> =
  T extends 'video-contents'
    ? VideoContent
    : T extends 'audio-contents'
    ? AudioContent
    : T extends 'text-contents'
    ? TextContent
    : Content
