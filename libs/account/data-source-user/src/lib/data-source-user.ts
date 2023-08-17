import {UserRepository} from '@queroser/account/domain-user'
import {UserRepositoryImpl} from './infrastructure'
import {LearnerImpl, UserImpl} from './entities'
import {DataSource} from 'typeorm'

export const dataSourceUser = {
  entities() {
    return [UserImpl, LearnerImpl]
  },
  providers() {
    return [
      {
        provide: UserRepository,
        useFactory(ds: DataSource) {
          const userRepository = ds.getRepository(UserImpl)
          const learnerRepository = ds.getRepository(LearnerImpl)
          return new UserRepositoryImpl(userRepository, learnerRepository)
        },
        inject: [DataSource]
      },
    ]
  },
}
