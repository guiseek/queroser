import {CreateCourse, UpdateCourse} from '../dtos'
import {Course, Lesson} from '../entities'

export abstract class CourseRepository {
  abstract find(): Promise<Course[]>
  abstract findLessonsByCourse(courseId: string): Promise<Lesson[]>
  abstract findOne(id: string): Promise<Course | null>
  abstract removeOne(id: string): Promise<Course | null>
  abstract createOne(course: CreateCourse): Promise<Course | null>
  abstract updateOne(course: UpdateCourse): Promise<Course | null>
}
