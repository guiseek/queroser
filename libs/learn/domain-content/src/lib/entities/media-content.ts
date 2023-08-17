import {MediaImage} from '../base'

export interface MediaContent {
  artwork: MediaImage[]
  title: string
  timesPlayed: number
  duration: number
  artist: string
  album: string
  path: string
  size: number
}
