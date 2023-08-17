import {CreateCourse, Lesson} from '@queroser/learn/domain-course'
import {Language} from '@queroser/learn/domain-content'
import {IsOptional, IsString} from 'class-validator'
import {Type} from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class CreateCourseDto implements CreateCourse {
  @IsString()
  @ApiProperty()
  name: string

  @ApiProperty()
  @Type(() => Language)
  language: Language

  @IsOptional()
  @ApiProperty()
  @Type(() => Lesson)
  lessons: Lesson[]
}
