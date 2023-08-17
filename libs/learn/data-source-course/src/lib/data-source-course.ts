import {CourseRepository} from '@queroser/learn/domain-course'
import {CourseRepositoryImpl} from './infrastructure'
import {CourseImpl, LessonImpl} from './entities'
import {DataSource} from 'typeorm'

export const dataSourceCourse = {
  entities() {
    return [CourseImpl, LessonImpl]
  },
  providers() {
    return [
      {
        provide: CourseRepository,
        useFactory(ds: DataSource) {
          const courseRepository = ds.getRepository(CourseImpl)
          const lessonRepository = ds.getRepository(LessonImpl)
          return new CourseRepositoryImpl(courseRepository, lessonRepository)
        },
        inject: [DataSource],
      },
    ]
  },
}
