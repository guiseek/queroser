import {UpdateCourse} from '@queroser/learn/domain-course'
import {PartialType} from '@nestjs/mapped-types'
import {IsNotEmpty} from 'class-validator'
import {CreateCourseDto} from './create-course'
import {ApiProperty} from '@nestjs/swagger'

export class UpdateCourseDto
  extends PartialType(CreateCourseDto)
  implements UpdateCourse
{
  @IsNotEmpty()
  @ApiProperty()
  id: string
}
