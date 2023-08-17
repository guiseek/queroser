import {
  Course,
  Lesson,
  CreateCourse,
  CourseRepository,
  UpdateCourse,
} from '@queroser/learn/domain-course'
import {Repository} from 'typeorm'

export class CourseRepositoryImpl implements CourseRepository {
  constructor(
    private readonly courseRepository: Repository<Course>,
    private readonly lessonRepository: Repository<Lesson>
  ) {}

  find(): Promise<Course[]> {
    return this.courseRepository.find()
  }

  findLessonsByCourse(courseId: string): Promise<Lesson[]> {
    return this.lessonRepository.find({where: {course: {id: courseId}}})
  }

  findOne(id: string): Promise<Course | null> {
    return this.courseRepository.findOne({where: {id}})
  }

  async removeOne(id: string): Promise<Course | null> {
    const entity = await this.findOne(id)
    if (entity) this.courseRepository.remove(entity)
    return entity
  }

  createOne(course: CreateCourse): Promise<Course | null> {
    return this.courseRepository.save(this.courseRepository.create(course))
  }

  async updateOne(course: UpdateCourse): Promise<Course | null> {
    const entity = await this.findOne(course.id)
    if (entity) this.courseRepository.update(course.id, course)
    return entity
  }
}
