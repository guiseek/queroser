import {Entity} from '../interfaces/entity'

export type UpdateDto<T extends Entity> = Partial<T> & Pick<T, 'id'>
