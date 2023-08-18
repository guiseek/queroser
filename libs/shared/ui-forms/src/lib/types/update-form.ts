import {Entity, UpdateDto} from '@queroser/shared/util-data'
import {EntityForm} from './entity-form'

export type UpdateForm<T extends Entity> = EntityForm<UpdateDto<T>>
