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
  QuizContentDto,
  QuestionContentDto,
  CreateQuizContentDto,
  UpdateQuizContentDto,
  QuizContentRepository,
  CreateQuestionContentDto,
} from '@queroser/learn/data-source-content'
import {ApiPaginatedResponse} from '@queroser/shared/resource'
import {PageOptionsDto} from '@queroser/shared/data-source'

@Controller({
  path: 'learn/content/quizzes',
  version: '1',
})
@ApiTags('quizzes')
@UseInterceptors(ClassSerializerInterceptor)
export class LearnResourceQuizContentController {
  constructor(private readonly repository: QuizContentRepository) {}

  @Post()
  createOne(@Body() createQuizContentDto: CreateQuizContentDto) {
    return this.repository.createOne(createQuizContentDto)
  }

  @Post(':id/questions')
  createOneQuestion(
    @Query('id') @Body() createQuestionContentDto: CreateQuestionContentDto
  ) {
    // return this.repository.createOne(createQuestionContentDto)
  }

  @Get()
  @ApiPaginatedResponse(QuizContentDto)
  find(@Query() pageOptionsDto: PageOptionsDto) {
    return this.repository.find(pageOptionsDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repository.findOne(id)
  }

  @Get(':id/questions')
  @ApiPaginatedResponse(QuestionContentDto)
  findQuestions(@Query() pageOptionsDto: PageOptionsDto) {
    return this.repository.find(pageOptionsDto)
  }

  @Get(':id/questions/:questionId')
  findOneQuestion(
    @Param('id') id: string,
    @Param('questionId') questionId: string
  ) {
    return this.repository.findOne(id)
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateQuizContentDto: UpdateQuizContentDto
  ) {
    return this.repository.updateOne({...updateQuizContentDto, id})
  }

  @Patch(':id/questions/:questionId')
  updateOneQuestion(
    @Param('id') id: string,
    @Param('questionId') questionId: string,
    @Body() updateQuizContentDto: UpdateQuizContentDto
  ) {
    return this.repository.updateOne({...updateQuizContentDto, id})
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.repository.removeOne(id)
  }

  @Delete(':id/questions/:questionId')
  removeOneQuestion(
    @Param('id') id: string,
    @Param('questionId') questionId: string
  ) {
    return this.repository.removeOne(id)
  }
}
