import {Course} from '../entities'

export type CreateCourse = Omit<Course, 'id' | 'createdAt' | 'updatedAt'>
