import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {AccountResourceAuthService} from './account-resource-auth.service'
import {CreateAccountResourceAuthDto} from './dto/create-account-resource-auth.dto'
import {UpdateAccountResourceAuthDto} from './dto/update-account-resource-auth.dto'

@Controller('account-resource-auth')
export class AccountResourceAuthController {
  constructor(
    private readonly accountResourceAuthService: AccountResourceAuthService
  ) {}

  @Post()
  create(@Body() createAccountResourceAuthDto: CreateAccountResourceAuthDto) {
    return this.accountResourceAuthService.create(createAccountResourceAuthDto)
  }

  @Get()
  findAll() {
    return this.accountResourceAuthService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountResourceAuthService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountResourceAuthDto: UpdateAccountResourceAuthDto
  ) {
    return this.accountResourceAuthService.update(
      +id,
      updateAccountResourceAuthDto
    )
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountResourceAuthService.remove(+id)
  }
}
