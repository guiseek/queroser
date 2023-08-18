import {EntityRepository} from '@queroser/shared/util-data'
import {Course} from '../entities'

export abstract class CourseRepository extends EntityRepository<Course> {}
