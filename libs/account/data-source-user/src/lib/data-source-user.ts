import {UserRepository} from '@queroser/account/domain-user'
import {getProviderFactoryFor} from '@queroser/shared/util-data'
import {UserRepositoryImpl} from './infrastructure'
import {LearnerImpl, UserImpl} from './entities'

export const dataSourceUser = {
  entities() {
    return [UserImpl, LearnerImpl]
  },
  providers() {
    return [
      getProviderFactoryFor(
        UserRepository,
        UserRepositoryImpl,
        UserImpl,
        LearnerImpl
      ),
    ]
  },
}
