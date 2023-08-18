import {Entity} from '@queroser/shared/util-data'
import {FormGroup} from '@angular/forms'
import {CreateForm} from '../types'

export class CreateFormBase<T extends Entity> extends FormGroup<
  CreateForm<T>
> {}
