import {Test, TestingModule} from '@nestjs/testing'
import {LearnResourceCourseController} from './learn-resource-course.controller'
import {LearnResourceCourseService} from './learn-resource-course.service'

describe('LearnResourceCourseController', () => {
  let controller: LearnResourceCourseController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnResourceCourseController],
      providers: [LearnResourceCourseService],
    }).compile()

    controller = module.get<LearnResourceCourseController>(
      LearnResourceCourseController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
