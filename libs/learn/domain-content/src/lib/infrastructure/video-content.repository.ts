import {CreateVideoContent, UpdateVideoContent} from '../dtos'
import {Page, PageOptions} from '@queroser/shared/util-data'
import {VideoContent} from '../entities'

export abstract class VideoContentRepository {
  abstract find(): Promise<VideoContent[]>
  abstract findPaged(pageOpptions: PageOptions): Promise<Page<VideoContent>>
  abstract findOne(id: string): Promise<VideoContent | null>
  abstract removeOne(id: string): Promise<VideoContent | null>
  abstract createOne(course: CreateVideoContent): Promise<VideoContent | null>
  abstract updateOne(course: UpdateVideoContent): Promise<VideoContent | null>
}
