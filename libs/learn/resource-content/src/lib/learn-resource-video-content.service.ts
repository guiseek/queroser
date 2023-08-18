import {VideoContentRepository} from '@queroser/learn/data-source-content'
import {PageOptionsDto} from '@queroser/shared/data-source'
import {Injectable} from '@nestjs/common'

@Injectable()
export class LearnResourceVideoContentService {
  constructor(private readonly videoRepository: VideoContentRepository) {
  }

  findVideos(pageOptionsDto: PageOptionsDto) {
    return this.videoRepository.findPaged(pageOptionsDto)
  }
}
