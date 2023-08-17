import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {ForumResourceFaqService} from './forum-resource-faq.service'
import {CreateForumResourceFaqDto} from './dto/create-forum-resource-faq.dto'
import {UpdateForumResourceFaqDto} from './dto/update-forum-resource-faq.dto'

@Controller('forum-resource-faq')
export class ForumResourceFaqController {
  constructor(
    private readonly forumResourceFaqService: ForumResourceFaqService
  ) {}

  @Post()
  create(@Body() createForumResourceFaqDto: CreateForumResourceFaqDto) {
    return this.forumResourceFaqService.create(createForumResourceFaqDto)
  }

  @Get()
  findAll() {
    return this.forumResourceFaqService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.forumResourceFaqService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateForumResourceFaqDto: UpdateForumResourceFaqDto
  ) {
    return this.forumResourceFaqService.update(+id, updateForumResourceFaqDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.forumResourceFaqService.remove(+id)
  }
}
