import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {
  ContentRepository,
  CreateVideoContentDto,
  UpdateVideoContentDto,
} from '@queroser/learn/data-source-content'

@Controller({
  path: 'learn/content',
  version: 'v1',
})
export class LearnResourceContentController {
  constructor(private readonly contentRepository: ContentRepository) {}

  @Post('videos')
  createOneVideo(@Body() createVideoContentDto: CreateVideoContentDto) {
    return this.contentRepository.createOne(createVideoContentDto)
  }

  @Get('videos')
  findVideos() {
    return this.contentRepository.find()
  }

  @Get('videos/:id')
  findOneVideo(@Param('id') id: string) {
    return this.contentRepository.findOne(id)
  }

  @Patch('videos/:id')
  updateOneVideo(
    @Param('id') id: string,
    @Body() updateVideoContentDto: UpdateVideoContentDto
  ) {
    return this.contentRepository.updateOne({...updateVideoContentDto, id})
  }

  @Delete('videos/:id')
  removeOneVideo(@Param('id') id: string) {
    return this.contentRepository.removeOne(id)
  }
}
