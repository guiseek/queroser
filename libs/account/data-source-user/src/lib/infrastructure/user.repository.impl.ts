import {
  User,
  Learner,
  CreateUser,
  UpdateUser,
  UserRepository,
} from '@queroser/account/domain-user'
import {Repository} from 'typeorm'

export class UserRepositoryImpl implements UserRepository {
  constructor(
    private readonly userRepository: Repository<User>,
    private readonly learnerRepository: Repository<Learner>
  ) {}

  find() {
    return this.userRepository.find()
  }

  findLearnersByUser(userId: string) {
    return this.learnerRepository.find({where: {user: {id: userId}}})
  }

  findOne(id: string) {
    return this.userRepository.findOne({where: {id}})
  }

  async removeOne(id: string) {
    const entity = await this.findOne(id)
    if (entity) this.userRepository.remove(entity)
    return entity
  }

  createOne(user: CreateUser) {
    return this.userRepository.save(this.userRepository.create(user))
  }

  async updateOne(user: UpdateUser) {
    const entity = await this.findOne(user.id)
    if (entity) this.userRepository.update(user.id, user)
    return entity
  }
}
