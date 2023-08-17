import {CourseRepository} from '@queroser/learn/domain-course'
import {getProviderFactoryFor} from '@queroser/shared/util-data'
import {CourseRepositoryImpl} from './infrastructure'
import {CourseImpl, LessonImpl} from './entities'

export const dataSourceCourse = {
  entities() {
    return [CourseImpl, LessonImpl]
  },
  providers() {
    return [
      getProviderFactoryFor(
        CourseRepository,
        CourseRepositoryImpl,
        CourseImpl,
        LessonImpl
      ),
    ]
  },
}
