import {Injectable} from '@nestjs/common'
import {CreateAccountResourceAuthDto} from './dto/create-account-resource-auth.dto'
import {UpdateAccountResourceAuthDto} from './dto/update-account-resource-auth.dto'

@Injectable()
export class AccountResourceAuthService {
  create(createAccountResourceAuthDto: CreateAccountResourceAuthDto) {
    return 'This action adds a new accountResourceAuth'
  }

  findAll() {
    return `This action returns all accountResourceAuth`
  }

  findOne(id: number) {
    return `This action returns a #${id} accountResourceAuth`
  }

  update(
    id: number,
    updateAccountResourceAuthDto: UpdateAccountResourceAuthDto
  ) {
    return `This action updates a #${id} accountResourceAuth`
  }

  remove(id: number) {
    return `This action removes a #${id} accountResourceAuth`
  }
}
