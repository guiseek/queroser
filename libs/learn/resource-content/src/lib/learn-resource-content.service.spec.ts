import {Test, TestingModule} from '@nestjs/testing'
import {LearnResourceContentService} from './learn-resource-content.service'

describe('LearnResourceContentService', () => {
  let service: LearnResourceContentService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnResourceContentService],
    }).compile()

    service = module.get<LearnResourceContentService>(
      LearnResourceContentService
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
