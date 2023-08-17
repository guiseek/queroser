import {Language} from '@queroser/learn/domain-content'
import {Lesson} from './lesson'

export class Course {
  id: string
  name: string
  language: Language
  lessons: Lesson[]
  createdAt: Date
  updatedAt: Date
}
