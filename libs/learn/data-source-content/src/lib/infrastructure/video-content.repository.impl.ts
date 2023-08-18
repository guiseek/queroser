import {
  VideoContent,
  VideoContentRepository,
} from '@queroser/learn/domain-content'
import {BaseRepository} from '@queroser/shared/data-source'
import {Repository} from 'typeorm'

export class VideoContentRepositoryImpl
  extends BaseRepository<VideoContent>
  implements VideoContentRepository
{
  constructor(repository: Repository<VideoContent>) {
    super(repository, 'video-contents')
  }
}
