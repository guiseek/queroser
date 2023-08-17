import {Module} from '@nestjs/common'
import {AccountResourceAuthService} from './account-resource-auth.service'
import {AccountResourceAuthController} from './account-resource-auth.controller'

@Module({
  controllers: [AccountResourceAuthController],
  providers: [AccountResourceAuthService],
})
export class AccountResourceAuthModule {}
