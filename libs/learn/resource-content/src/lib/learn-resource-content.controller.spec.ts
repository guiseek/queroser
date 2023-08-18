import {Test, TestingModule} from '@nestjs/testing'
import {LearnResourceContentController} from './learn-resource-content.controller'

describe('LearnResourceContentController', () => {
  let controller: LearnResourceContentController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnResourceContentController]
    }).compile()

    controller = module.get<LearnResourceContentController>(
      LearnResourceContentController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
