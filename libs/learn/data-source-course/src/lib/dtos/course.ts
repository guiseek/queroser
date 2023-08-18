import {Language} from '@queroser/learn/domain-content'
import {Course} from '@queroser/learn/domain-course'
import {ApiProperty} from '@nestjs/swagger'
import {Type} from 'class-transformer'

export class CourseDto implements Course {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  @Type(() => Language)
  language: Language

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
