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
  CreateVideoContentDto,
  UpdateVideoContentDto,
  VideoContentRepository,
} from '@queroser/learn/data-source-content'
import {ApiPaginatedResponse} from '@queroser/shared/resource'
import {PageOptionsDto} from '@queroser/shared/data-source'

@Controller({
  path: 'learn/content/videos',
  version: '1',
})
@ApiTags('videos')
@UseInterceptors(ClassSerializerInterceptor)
export class LearnResourceVideoContentController {
  constructor(private readonly repository: VideoContentRepository) {}

  @Post()
  createOne(@Body() createVideoContentDto: CreateVideoContentDto) {
    return this.repository.createOne(createVideoContentDto)
  }

  @Get()
  @ApiPaginatedResponse(VideoContentDto)
  find(@Query() pageOptionsDto: PageOptionsDto) {
    return this.repository.find(pageOptionsDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repository.findOne(id)
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateVideoContentDto: UpdateVideoContentDto
  ) {
    return this.repository.updateOne({...updateVideoContentDto, id})
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.repository.removeOne(id)
  }
}
