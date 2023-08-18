import {FormArray, FormControl, FormGroup} from '@angular/forms'
import {CleanEntity} from './clean-entity'

type OneOrList<T> = T extends Array<infer U>
  ? FormArray<FormControl<U> | FormGroup<EntityForm<U>>>
  : T extends PropertyKey
  ? FormControl<T | string | null>
  : FormGroup<EntityForm<T>>

export type EntityForm<T> = {
  [K in keyof CleanEntity<T>]: OneOrList<T[K]>
}
