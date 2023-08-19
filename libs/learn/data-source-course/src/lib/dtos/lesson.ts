import {Course, Lesson} from '@queroser/learn/domain-course'
import {ApiProperty} from '@nestjs/swagger'

export class LessonDto implements Lesson {
  @ApiProperty()
  id: string

  @ApiProperty()
  title: string

  @ApiProperty()
  course: Course

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
