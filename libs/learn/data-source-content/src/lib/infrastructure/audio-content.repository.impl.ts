import {
  AudioContent,
  AudioContentRepository,
} from '@queroser/learn/domain-content'
import {BaseRepository} from '@queroser/shared/data-source'
import {Repository} from 'typeorm'

export class AudioContentRepositoryImpl
  extends BaseRepository<AudioContent>
  implements AudioContentRepository
{
  constructor(repository: Repository<AudioContent>) {
    super(repository, 'audio-contents')
  }
}
