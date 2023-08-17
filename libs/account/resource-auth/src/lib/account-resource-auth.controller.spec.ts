import {Test, TestingModule} from '@nestjs/testing'
import {AccountResourceAuthController} from './account-resource-auth.controller'
import {AccountResourceAuthService} from './account-resource-auth.service'

describe('AccountResourceAuthController', () => {
  let controller: AccountResourceAuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountResourceAuthController],
      providers: [AccountResourceAuthService],
    }).compile()

    controller = module.get<AccountResourceAuthController>(
      AccountResourceAuthController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
