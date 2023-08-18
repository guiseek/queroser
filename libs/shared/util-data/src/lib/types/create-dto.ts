import {Entity} from '../interfaces/entity'

export type CreateDto<T extends Entity> = Omit<
  T,
  'id' | 'createdAt' | 'updatedAt'
>
