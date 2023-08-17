import {Test, TestingModule} from '@nestjs/testing'
import {AccountResourceAuthService} from './account-resource-auth.service'

describe('AccountResourceAuthService', () => {
  let service: AccountResourceAuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountResourceAuthService],
    }).compile()

    service = module.get<AccountResourceAuthService>(AccountResourceAuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
