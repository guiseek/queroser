import {Language, LanguageRepository} from '@queroser/learn/domain-content'
import {CreateLanguageDto, UpdateLanguageDto} from '../dtos'
import {Repository} from 'typeorm'
import {BaseRepository, PageOptionsDto} from '@queroser/shared/data-source'

export class LanguageRepositoryImpl
  extends BaseRepository<Language>
  implements LanguageRepository
{
  constructor(private readonly languageRepository: Repository<Language>) {
    super(languageRepository, 'languages')
  }
}
