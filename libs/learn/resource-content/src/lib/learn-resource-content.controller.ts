import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {LearnResourceContentService} from './learn-resource-content.service'
import {CreateLearnResourceContentDto} from './dto/create-learn-resource-content.dto'
import {UpdateLearnResourceContentDto} from './dto/update-learn-resource-content.dto'

@Controller({
  path: 'learn',
  version: 'v1'
})
export class LearnResourceContentController {
  constructor(
    private readonly learnResourceContentService: LearnResourceContentService
  ) {}

  @Post('contents')
  create(@Body() createLearnResourceContentDto: CreateLearnResourceContentDto) {
    return this.learnResourceContentService.create(
      createLearnResourceContentDto
    )
  }

  @Get('contents')
  findAll() {
    return this.learnResourceContentService.findAll()
  }

  @Get('contents/:id')
  findOne(@Param('id') id: string) {
    return this.learnResourceContentService.findOne(+id)
  }

  @Patch('contents/:id')
  update(
    @Param('id') id: string,
    @Body() updateLearnResourceContentDto: UpdateLearnResourceContentDto
  ) {
    return this.learnResourceContentService.update(
      +id,
      updateLearnResourceContentDto
    )
  }

  @Delete('contents/:id')
  remove(@Param('id') id: string) {
    return this.learnResourceContentService.remove(+id)
  }
}
