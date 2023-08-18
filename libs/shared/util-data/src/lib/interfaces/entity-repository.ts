import {CreateDto, UpdateDto} from '../types'
import {Entity} from './entity'

export abstract class EntityRepository<T extends Entity> {
  abstract find(): Promise<T[]>
  abstract findOne(id: string): Promise<T | null>
  abstract removeOne(id: string): Promise<T | null>
  abstract createOne(course: CreateDto<T>): Promise<T | null>
  abstract updateOne(course: UpdateDto<T>): Promise<T | null>
}
