import {UpdateUser} from '@queroser/account/domain-user'
import {PartialType} from '@nestjs/mapped-types'
import {IsNotEmpty} from 'class-validator'
import {CreateUserDto} from './create-user'

export class UpdateUserDto
  extends PartialType(CreateUserDto)
  implements UpdateUser
{
  @IsNotEmpty()
  id: string
}
