import {Test, TestingModule} from '@nestjs/testing'
import {LearnResourceContentController} from './learn-resource-content.controller'
import {LearnResourceContentService} from './learn-resource-content.service'

describe('LearnResourceContentController', () => {
  let controller: LearnResourceContentController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnResourceContentController],
      providers: [LearnResourceContentService],
    }).compile()

    controller = module.get<LearnResourceContentController>(
      LearnResourceContentController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
