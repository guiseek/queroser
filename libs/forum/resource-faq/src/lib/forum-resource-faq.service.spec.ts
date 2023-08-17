import {Test, TestingModule} from '@nestjs/testing'
import {ForumResourceFaqService} from './forum-resource-faq.service'

describe('ForumResourceFaqService', () => {
  let service: ForumResourceFaqService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForumResourceFaqService],
    }).compile()

    service = module.get<ForumResourceFaqService>(ForumResourceFaqService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
