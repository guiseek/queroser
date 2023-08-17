import {CreateCourse, Lesson} from '@queroser/learn/domain-course'
import {Language} from '@queroser/learn/domain-content'
import {IsOptional, IsString} from 'class-validator'
import {Type} from 'class-transformer'

export class CreateCourseDto implements CreateCourse {
  @IsString()
  name: string

  @Type(() => Language)
  language: Language

  @IsOptional()
  @Type(() => Lesson)
  lessons: Lesson[]
}
