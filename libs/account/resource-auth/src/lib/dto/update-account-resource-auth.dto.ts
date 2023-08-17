import {PartialType} from '@nestjs/mapped-types'
import {CreateAccountResourceAuthDto} from './create-account-resource-auth.dto'

export class UpdateAccountResourceAuthDto extends PartialType(
  CreateAccountResourceAuthDto
) {}
