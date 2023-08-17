import {User} from '../entities'

export type UpdateUser = Partial<User> & Pick<User, 'id'>
