import {Get, Param, Delete, Query, Controller} from '@nestjs/common'
import {ApiPaginatedResponse} from '@queroser/shared/resource'
import {PageOptionsDto} from '@queroser/shared/data-source'
import {ApiTags} from '@nestjs/swagger'
import {
  ContentRepository,
  ContentDto,
} from '@queroser/learn/data-source-content'

@Controller({
  path: 'learn/contents',
  version: '1',
})
@ApiTags('learn')
export class LearnResourceContentController {
  constructor(private readonly contentRepository: ContentRepository) {}

  @Get()
  @ApiPaginatedResponse(ContentDto)
  find(@Query() pageOptionsDto: PageOptionsDto) {
    return this.contentRepository.find(pageOptionsDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentRepository.findOne(id)
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.contentRepository.removeOne(id)
  }
}
