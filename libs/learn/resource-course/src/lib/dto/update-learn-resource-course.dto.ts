import {PartialType} from '@nestjs/mapped-types'
import {CreateLearnResourceCourseDto} from './create-learn-resource-course.dto'

export class UpdateLearnResourceCourseDto extends PartialType(
  CreateLearnResourceCourseDto
) {}
