import {Content, ContentRepository} from '@queroser/learn/domain-content'
import {BaseRepository} from '@queroser/shared/data-source'
import {Repository} from 'typeorm'

export class ContentRepositoryImpl
  extends BaseRepository<Content>
  implements ContentRepository
{
  constructor(private readonly contentRepository: Repository<Content>) {
    super(contentRepository, 'contents')
  }

  findVideoByContent(id: string) {
    return this.contentRepository.find({relations: ['videos'], where: [{id}]})
    // return this.videoRepository.find({where: {content: {id: contentId}}})
  }
}
