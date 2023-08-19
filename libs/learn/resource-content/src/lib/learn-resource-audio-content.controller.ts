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
  AudioContentDto,
  CreateAudioContentDto,
  UpdateAudioContentDto,
  AudioContentRepository,
} from '@queroser/learn/data-source-content'
import {ApiPaginatedResponse} from '@queroser/shared/resource'
import {PageOptionsDto} from '@queroser/shared/data-source'

@Controller({
  path: 'learn/content/audios',
  version: '1',
})
@ApiTags('audios')
@UseInterceptors(ClassSerializerInterceptor)
export class LearnResourceAudioContentController {
  constructor(private readonly repository: AudioContentRepository) {}

  @Post()
  createOne(@Body() createAudioContentDto: CreateAudioContentDto) {
    return this.repository.createOne(createAudioContentDto)
  }

  @Get()
  @ApiPaginatedResponse(AudioContentDto)
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
    @Body() updateAudioContentDto: UpdateAudioContentDto
  ) {
    return this.repository.updateOne({...updateAudioContentDto, id})
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.repository.removeOne(id)
  }
}
