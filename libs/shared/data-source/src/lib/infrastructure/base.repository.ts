import {Entity, EntityRepository} from '@queroser/shared/util-data'
import {FindOneOptions, Repository} from 'typeorm'
import {PageDto, PageMetaDto, PageOptionsDto} from '../dtos'

export class BaseRepository<T extends Entity> implements EntityRepository<T> {
  constructor(
    protected readonly repository: Repository<T>,
    protected readonly name: string
  ) {}

  findAll(): Promise<T[]> {
    return this.repository.find()
  }

  async find(pageOptions: PageOptionsDto) {
    const orderBy = 'createdAt'

    const {skip, take, order} = pageOptions

    const queryBuilder = this.repository.createQueryBuilder(this.name)

    queryBuilder.orderBy(`${this.name}.${orderBy}`, order).skip(skip).take(take)

    const itemCount = await queryBuilder.getCount()
    const {entities} = await queryBuilder.getRawAndEntities()

    const pageMetaDto = new PageMetaDto({itemCount, pageOptions})

    return new PageDto(entities, pageMetaDto)
  }

  findOne(id: string) {
    const options: FindOneOptions = {where: {id}}
    return this.repository.findOne(options)
  }

  async removeOne(id: string) {
    const entity = await this.findOne(id)
    if (entity) this.repository.remove(entity)
    return entity
  }

  createOne(value: T) {
    return this.repository.save(this.repository.create(value))
  }

  async updateOne(value: T) {
    const entity = await this.findOne(value.id)
    return this.repository.save({...entity, ...value, id: value.id})
  }
}
