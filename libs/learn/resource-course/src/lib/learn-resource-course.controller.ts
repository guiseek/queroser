import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import {
  CourseRepository,
  CreateCourseDto,
  UpdateCourseDto,
} from '@queroser/learn/api-course'

@Controller({
  path: 'learn',
  version: '1',
})
@ApiTags('learn')
export class LearnResourceCourseController {
  constructor(private readonly courseRepository: CourseRepository) {}

  @Post('courses')
  create(@Body() createLearnResourceCourseDto: CreateCourseDto) {
    return this.courseRepository.createOne(createLearnResourceCourseDto)
  }

  @Get('courses')
  findAll() {
    return this.courseRepository.find()
  }

  @Get('courses/:id')
  findOne(@Param('id') id: string) {
    return this.courseRepository.findOne(id)
  }

  @Patch('courses/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.updateOne({...updateCourseDto, id})
  }

  @Delete('courses/:id')
  remove(@Param('id') id: string) {
    return this.courseRepository.removeOne(id)
  }
}
