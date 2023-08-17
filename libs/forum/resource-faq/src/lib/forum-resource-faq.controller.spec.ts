import {Test, TestingModule} from '@nestjs/testing'
import {ForumResourceFaqController} from './forum-resource-faq.controller'
import {ForumResourceFaqService} from './forum-resource-faq.service'

describe('ForumResourceFaqController', () => {
  let controller: ForumResourceFaqController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForumResourceFaqController],
      providers: [ForumResourceFaqService],
    }).compile()

    controller = module.get<ForumResourceFaqController>(
      ForumResourceFaqController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
