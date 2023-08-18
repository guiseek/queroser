import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'
import {
  ContentRepository,
  CreateVideoContentDto,
  UpdateVideoContentDto,
} from '@queroser/learn/data-source-content'

@Controller({
  path: 'learn/contents',
  version: '1',
})
@ApiTags('learn')
export class LearnResourceContentController {
  constructor(private readonly contentRepository: ContentRepository) {}

  @Post()
  createOneVideo(@Body() createVideoContentDto: CreateVideoContentDto) {
    return this.contentRepository.createOne(createVideoContentDto)
  }

  @Get()
  findVideos() {
    return this.contentRepository.find()
  }

  @Get(':id')
  findOneVideo(@Param('id') id: string) {
    return this.contentRepository.findOne(id)
  }

  @Patch(':id')
  updateOneVideo(
    @Param('id') id: string,
    @Body() updateVideoContentDto: UpdateVideoContentDto
  ) {
    return this.contentRepository.updateOne({...updateVideoContentDto, id})
  }

  @Delete(':id')
  removeOneVideo(@Param('id') id: string) {
    return this.contentRepository.removeOne(id)
  }
}
