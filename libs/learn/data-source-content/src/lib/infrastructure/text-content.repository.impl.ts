import {
  TextContent,
  TextContentRepository,
} from '@queroser/learn/domain-content'
import {BaseRepository} from '@queroser/shared/data-source'
import {Repository} from 'typeorm'

export class TextContentRepositoryImpl
  extends BaseRepository<TextContent>
  implements TextContentRepository
{
  constructor(repository: Repository<TextContent>) {
    super(repository, 'text-contents')
  }
}
