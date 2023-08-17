import {Course} from '../entities'

export type UpdateCourse = Partial<Course> & Pick<Course, 'id'>
