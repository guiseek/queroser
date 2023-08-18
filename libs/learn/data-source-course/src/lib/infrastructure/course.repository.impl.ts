import {Course, CourseRepository} from '@queroser/learn/domain-course'
import {BaseRepository} from '@queroser/shared/data-source'
import {Repository} from 'typeorm'

export class CourseRepositoryImpl
  extends BaseRepository<Course>
  implements CourseRepository
{
  constructor(repository: Repository<Course>) {
    super(repository, 'courses')
  }
}
