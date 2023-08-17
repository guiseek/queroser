import {UpdateCourse} from '@queroser/learn/domain-course'
import {PartialType} from '@nestjs/mapped-types'
import {IsNotEmpty} from 'class-validator'
import {CreateCourseDto} from './create-course'

export class UpdateCourseDto
  extends PartialType(CreateCourseDto)
  implements UpdateCourse
{
  @IsNotEmpty()
  id: string
}
