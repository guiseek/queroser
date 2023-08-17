import {
  Content,
  CreateContent,
  UpdateContent,
  VideoContent,
  AudioContent,
  TextContent,
  ContentRepository,
} from '@queroser/learn/domain-content'
import {Repository} from 'typeorm'

export class ContentRepositoryImpl implements ContentRepository {
  constructor(
    private readonly contentRepository: Repository<Content>,
    private readonly videoRepository: Repository<VideoContent>,
    private readonly audioRepository: Repository<AudioContent>,
    private readonly textRepository: Repository<TextContent>
  ) {}

  find() {
    return this.contentRepository.find()
  }

  findVideoByContent(id: string) {
    return this.contentRepository.find({relations: ['videos'], where: [{id}]})
    // return this.videoRepository.find({where: {content: {id: contentId}}})
  }

  findOne(id: string) {
    return this.contentRepository.findOne({where: {id}})
  }

  async removeOne(id: string) {
    const entity = await this.findOne(id)
    if (entity) this.contentRepository.remove(entity)
    return entity
  }

  createOne(content: CreateContent) {
    return this.contentRepository.save(this.contentRepository.create(content))
  }

  async updateOne(content: UpdateContent) {
    const entity = await this.findOne(content.id)
    if (entity) this.contentRepository.update(content.id, content)
    return entity
  }
}
