import {Test, TestingModule} from '@nestjs/testing'
import {AccountResourceUserController} from './account-resource-user.controller'
import {AccountResourceUserService} from './account-resource-user.service'

describe('AccountResourceUserController', () => {
  let controller: AccountResourceUserController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountResourceUserController],
      providers: [AccountResourceUserService],
    }).compile()

    controller = module.get<AccountResourceUserController>(
      AccountResourceUserController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
