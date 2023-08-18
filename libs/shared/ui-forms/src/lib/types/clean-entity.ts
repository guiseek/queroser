import {Entity} from '@queroser/shared/util-data'

export type CleanEntity<T> = Omit<T, 'createdAt' | 'updatedAt'>
