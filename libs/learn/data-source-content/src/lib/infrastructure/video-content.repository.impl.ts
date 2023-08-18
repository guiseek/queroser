import {
  VideoContent,
  CreateVideoContent,
  UpdateVideoContent,
  VideoContentRepository,
} from '@queroser/learn/domain-content'
import {PageDto, PageMetaDto} from '@queroser/shared/data-source'
import {PageOptions} from '@queroser/shared/util-data'
import {Repository} from 'typeorm'

export class VideoContentRepositoryImpl implements VideoContentRepository {
  constructor(private readonly contentRepository: Repository<VideoContent>) {}

  find() {
    return this.contentRepository.find({skip: 10, take: 10})
  }

  async findPaged(pageOptions: PageOptions) {
    const name = `video-contents`
    const orderBy = 'createdAt'

    const {skip, take, order} = pageOptions

    const queryBuilder = this.contentRepository.createQueryBuilder(name)

    queryBuilder.orderBy(`${name}.${orderBy}`, order).skip(skip).take(take)

    const itemCount = await queryBuilder.getCount()
    const {entities} = await queryBuilder.getRawAndEntities()

    const pageMetaDto = new PageMetaDto({itemCount, pageOptions})

    return new PageDto(entities, pageMetaDto)
  }

  findVideoByVideoContent(id: string) {
    return this.contentRepository.find({where: [{id}]})
  }

  findOne(id: string) {
    return this.contentRepository.findOne({where: {id}})
  }

  async removeOne(id: string) {
    const entity = await this.findOne(id)
    if (entity) this.contentRepository.remove(entity)
    return entity
  }

  createOne(content: CreateVideoContent) {
    return this.contentRepository.save(this.contentRepository.create(content))
  }

  async updateOne(content: UpdateVideoContent) {
    const entity = await this.findOne(content.id)
    if (entity) this.contentRepository.update(content.id, content)
    return entity
  }
}
