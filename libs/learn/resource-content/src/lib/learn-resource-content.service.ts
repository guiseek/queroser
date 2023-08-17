import {Injectable} from '@nestjs/common'
import {CreateLearnResourceContentDto} from './dto/create-learn-resource-content.dto'
import {UpdateLearnResourceContentDto} from './dto/update-learn-resource-content.dto'

@Injectable()
export class LearnResourceContentService {
  create(createLearnResourceContentDto: CreateLearnResourceContentDto) {
    return 'This action adds a new learnResourceContent'
  }

  findAll() {
    return `This action returns all learnResourceContent`
  }

  findOne(id: number) {
    return `This action returns a #${id} learnResourceContent`
  }

  update(
    id: number,
    updateLearnResourceContentDto: UpdateLearnResourceContentDto
  ) {
    return `This action updates a #${id} learnResourceContent`
  }

  remove(id: number) {
    return `This action removes a #${id} learnResourceContent`
  }
}
