import {CreateUser, UpdateUser} from '../dtos'
import {User} from '../entities'

export abstract class UserRepository {
  abstract find(): Promise<User[]>
  abstract findOne(id: string): Promise<User | null>
  abstract removeOne(id: string): Promise<User | null>
  abstract createOne(course: CreateUser): Promise<User | null>
  abstract updateOne(course: UpdateUser): Promise<User | null>
}
