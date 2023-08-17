import {Test, TestingModule} from '@nestjs/testing'
import {LearnResourceCourseService} from './learn-resource-course.service'

describe('LearnResourceCourseService', () => {
  let service: LearnResourceCourseService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnResourceCourseService],
    }).compile()

    service = module.get<LearnResourceCourseService>(LearnResourceCourseService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
