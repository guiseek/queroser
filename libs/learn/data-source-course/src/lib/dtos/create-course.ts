import {CreateCourse, Lesson} from '@queroser/learn/domain-course'
import {LanguageDto} from '@queroser/learn/data-source-content'
import {IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {Exclude, Type} from 'class-transformer'
import {LessonDto} from './lesson'

export class CreateCourseDto implements CreateCourse {
  @IsString()
  @ApiProperty()
  name: string

  @ApiProperty()
  @Type(() => LanguageDto)
  language: LanguageDto

  @Exclude()
  @IsOptional()
  @Type(() => LessonDto)
  lessons: LessonDto[]
}
