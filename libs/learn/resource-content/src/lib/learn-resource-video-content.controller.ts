import {
  Get,
  Post,
  Body,
  Patch,
  Query,
  Param,
  Delete,
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'
import {
  VideoContentDto,
  ContentRepository,
  CreateVideoContentDto,
  UpdateVideoContentDto,
} from '@queroser/learn/data-source-content'
import {ApiPaginatedResponse} from '@queroser/shared/resource'
import {PageOptionsDto} from '@queroser/shared/data-source'
import {LearnResourceVideoContentService} from './learn-resource-video-content.service'

@Controller({
  path: 'learn/content/videos',
  version: '1',
})
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('videos')
export class LearnResourceVideoContentController {
  constructor(
    private readonly contentRepository: ContentRepository,
    private readonly videoContentService: LearnResourceVideoContentService
  ) {}

  @Post()
  createOne(@Body() createVideoContentDto: CreateVideoContentDto) {
    return this.contentRepository.createOne(createVideoContentDto)
  }

  @Get()
  @ApiPaginatedResponse(VideoContentDto)
  find(@Query() pageOptionsDto: PageOptionsDto) {
    console.log(pageOptionsDto)

    return this.videoContentService.findVideos(pageOptionsDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentRepository.findOne(id)
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateVideoContentDto: UpdateVideoContentDto
  ) {
    return this.contentRepository.updateOne({...updateVideoContentDto, id})
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.contentRepository.removeOne(id)
  }
}
