import {Language, LanguageRepository} from '@queroser/learn/domain-content'
import {CreateLanguageDto, UpdateLanguageDto} from '../dtos'
import {Repository} from 'typeorm'

export class LanguageRepositoryImpl implements LanguageRepository {
  constructor(private readonly languageRepository: Repository<Language>) {}

  find() {
    return this.languageRepository.find()
  }

  findOne(id: string) {
    return this.languageRepository.findOne({where: {id}})
  }

  async removeOne(id: string) {
    const entity = await this.findOne(id)
    if (entity) this.languageRepository.remove(entity)
    return entity
  }

  createOne(content: CreateLanguageDto) {
    return this.languageRepository.save(this.languageRepository.create(content))
  }

  async updateOne(content: UpdateLanguageDto) {
    const entity = await this.findOne(content.id)
    if (entity) this.languageRepository.update(content.id, content)
    return entity
  }
}
