import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {LearnResourceCourseService} from './learn-resource-course.service'
import {CreateLearnResourceCourseDto} from './dto/create-learn-resource-course.dto'
import {UpdateLearnResourceCourseDto} from './dto/update-learn-resource-course.dto'

@Controller({
  path: 'learn',
  version: 'v1'
})
export class LearnResourceCourseController {
  constructor(private readonly courseService: LearnResourceCourseService) {}

  @Post('courses')
  create(@Body() createLearnResourceCourseDto: CreateLearnResourceCourseDto) {
    return this.courseService.create(createLearnResourceCourseDto)
  }

  @Get('courses')
  findAll() {
    return this.courseService.findAll()
  }

  @Get('courses/:id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id)
  }

  @Patch('courses/:id')
  update(
    @Param('id') id: string,
    @Body() updateLearnResourceCourseDto: UpdateLearnResourceCourseDto
  ) {
    return this.courseService.update(+id, updateLearnResourceCourseDto)
  }

  @Delete('courses/:id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id)
  }
}
