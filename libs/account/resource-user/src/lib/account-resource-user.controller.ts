import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'
import {
  UserRepository,
  CreateUserDto,
  UpdateUserDto,
} from '@queroser/account/data-source-user'

@Controller({
  path: 'account',
  version: '1',
})
@ApiTags('account')
export class AccountResourceUserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('users')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userRepository.createOne(createUserDto)
  }

  @Get('users')
  find() {
    return this.userRepository.find()
  }

  @Get('users/:id')
  findOne(@Param('id') id: string) {
    return this.userRepository.findOne(id)
  }

  @Patch('users/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userRepository.updateOne({...updateUserDto, id})
  }

  @Delete('users/:id')
  remove(@Param('id') id: string) {
    return this.userRepository.removeOne(id)
  }
}
