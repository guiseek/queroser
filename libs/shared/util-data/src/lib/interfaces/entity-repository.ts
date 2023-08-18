import {CreateDto, UpdateDto} from '../types'
import {PageOptions} from './page-options'
import {Entity} from './entity'
import {Page} from './page'

export abstract class EntityRepository<T extends Entity> {
  abstract find(pageOptions: PageOptions): Promise<Page<T>>

  abstract findAll(): Promise<T[]>
  abstract findOne(id: string): Promise<T | null>
  abstract removeOne(id: string): Promise<T | null>
  abstract createOne(course: CreateDto<T>): Promise<T | null>
  abstract updateOne(course: UpdateDto<T>): Promise<T | null>
}
