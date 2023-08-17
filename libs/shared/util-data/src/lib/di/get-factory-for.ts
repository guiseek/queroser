import {DataSource} from 'typeorm'
import {Ctor} from '../types/ctor'

export function getProviderFactoryFor<A, B extends Ctor, C extends Ctor[]>(
  base: A,
  impl: B,
  ...entities: C
) {
  return {
    provide: base,
    useFactory(ds: DataSource) {
      return new impl(
        ...entities.map((e) => ds.getRepository(e as any))
      ) as InstanceType<B>
    },
    inject: [DataSource],
  }
}
