import {Entity, EntityRepository} from '@queroser/shared/util-data'
import {PageDto, PageMetaDto, PageOptionsDto} from '../dtos'

export class MockRepository<T extends Entity> implements EntityRepository<T> {
  constructor(protected readonly collection: T[]) {}

  async findAll(): Promise<T[]> {
    return this.collection
  }

  async find(pageOptions: PageOptionsDto) {
    const orderBy = 'createdAt'

    const {skip, take, order} = pageOptions

    const items = this.collection.slice(skip, skip + take).sort((a, b) => {
      return order === 'ASC' ? 1 : -1
    })

    const itemCount = items.length

    const pageMetaDto = new PageMetaDto({itemCount, pageOptions})

    return new PageDto(items, pageMetaDto)
  }

  async findOne(id: string) {
    const entity = this.collection.find((item) => item.id === id)
    if (!entity) throw `NotFound`
    return entity
  }

  async removeOne(id: string) {
    const entity = this.collection.find((item) => item.id === id)
    if (!entity) throw `NotFound`
    const index = this.collection.findIndex((item) => item.id === id)
    this.collection.splice(index, 1)
    return entity
  }

  async createOne(value: T) {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.collection.push(entity)
    return entity
  }

  async updateOne(value: T) {
    const entity = this.collection.find((item) => item.id === value.id)
    if (!entity) throw `NotFound`
    const index = this.collection.findIndex((item) => item.id === value.id)
    const merged = {...entity, ...value}
    this.collection[index] = merged
    return merged
  }
}
