import {CreateUser} from '@queroser/account/domain-user'
import {IsEmail, IsNotEmpty} from 'class-validator'

export class CreateUserDto implements CreateUser {
  @IsNotEmpty()
  firstName: string

  @IsNotEmpty()
  lastName: string

  @IsNotEmpty()
  username: string

  @IsEmail()
  email: string
}
