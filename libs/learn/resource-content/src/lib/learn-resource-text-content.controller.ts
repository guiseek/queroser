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
  TextContentDto,
  CreateTextContentDto,
  UpdateTextContentDto,
  TextContentRepository,
} from '@queroser/learn/data-source-content'
import {ApiPaginatedResponse} from '@queroser/shared/resource'
import {PageOptionsDto} from '@queroser/shared/data-source'

@Controller({
  path: 'learn/content/texts',
  version: '1',
})
@ApiTags('texts')
@UseInterceptors(ClassSerializerInterceptor)
export class LearnResourceTextContentController {
  constructor(private readonly repository: TextContentRepository) {}

  @Post()
  createOne(@Body() createTextContentDto: CreateTextContentDto) {
    return this.repository.createOne(createTextContentDto)
  }

  @Get()
  @ApiPaginatedResponse(TextContentDto)
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
    @Body() updateTextContentDto: UpdateTextContentDto
  ) {
    return this.repository.updateOne({...updateTextContentDto, id})
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.repository.removeOne(id)
  }
}
