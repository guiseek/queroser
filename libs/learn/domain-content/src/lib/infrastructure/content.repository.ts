import {CreateContent, UpdateContent} from '../dtos'
import {Content} from '../entities'

export abstract class ContentRepository {
  abstract find(): Promise<Content[]>
  abstract findOne(id: string): Promise<Content | null>
  abstract removeOne(id: string): Promise<Content | null>
  abstract createOne(course: CreateContent): Promise<Content | null>
  abstract updateOne(course: UpdateContent): Promise<Content | null>
}
