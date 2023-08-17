import {Injectable} from '@nestjs/common'
import {CreateLearnResourceCourseDto} from './dto/create-learn-resource-course.dto'
import {UpdateLearnResourceCourseDto} from './dto/update-learn-resource-course.dto'

@Injectable()
export class LearnResourceCourseService {
  create(createLearnResourceCourseDto: CreateLearnResourceCourseDto) {
    return 'This action adds a new learnResourceCourse'
  }

  findAll() {
    return `This action returns all learnResourceCourse`
  }

  findOne(id: number) {
    return `This action returns a #${id} learnResourceCourse`
  }

  update(
    id: number,
    updateLearnResourceCourseDto: UpdateLearnResourceCourseDto
  ) {
    return `This action updates a #${id} learnResourceCourse`
  }

  remove(id: number) {
    return `This action removes a #${id} learnResourceCourse`
  }
}
