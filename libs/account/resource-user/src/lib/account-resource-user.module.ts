import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {dataSourceUser} from '@queroser/account/data-source-user'
import {AccountResourceUserController} from './account-resource-user.controller'

@Module({
  imports: [TypeOrmModule.forFeature(dataSourceUser.entities())],
  controllers: [AccountResourceUserController],
  providers: [...dataSourceUser.providers()],
})
export class AccountResourceUserModule {}
