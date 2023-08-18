import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'
import {
  CourseDto,
  CourseRepository,
  CreateCourseDto,
  UpdateCourseDto,
} from '@queroser/learn/api-course'
import {} from '@queroser/learn/data-source-course'
import { PageOptionsDto } from '@queroser/shared/data-source'
import {ApiPaginatedResponse} from '@queroser/shared/resource'

@Controller({
  path: 'learn/courses',
  version: '1',
})
@ApiTags('courses')
@UseInterceptors(ClassSerializerInterceptor)
export class LearnResourceCourseController {
  constructor(private readonly courseRepository: CourseRepository) {}

  @Post()
  create(@Body() createLearnResourceCourseDto: CreateCourseDto) {
    return this.courseRepository.createOne(createLearnResourceCourseDto)
  }

  @Get()
  @ApiPaginatedResponse(CourseDto)
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.courseRepository.find(pageOptionsDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseRepository.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.updateOne({...updateCourseDto, id})
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseRepository.removeOne(id)
  }
}
