import {Entity, CreateDto} from '@queroser/shared/util-data'
import {EntityForm} from './entity-form'

export type CreateForm<T extends Entity> = EntityForm<CreateDto<T>>
