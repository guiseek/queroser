import {ApiProperty} from '@nestjs/swagger'
import {CreateUser} from '@queroser/account/domain-user'
import {IsEmail, IsNotEmpty} from 'class-validator'

export class CreateUserDto implements CreateUser {
  @IsNotEmpty()
  @ApiProperty()
  firstName: string

  @IsNotEmpty()
  @ApiProperty()
  lastName: string

  @IsNotEmpty()
  @ApiProperty()
  username: string

  @IsEmail()
  @ApiProperty()
  email: string
}
