import {User} from './user'

export interface Learner {
  id: string
  user: User
  panache: boolean
  createdAt: string
  updatedAt: string
}
