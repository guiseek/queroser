import {Order} from '../constants'

export interface PageOptions {
  readonly order?: Order
  readonly page?: number
  readonly take?: number
  readonly skip?: number
}
