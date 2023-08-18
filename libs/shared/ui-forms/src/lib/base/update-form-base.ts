import {Entity} from '@queroser/shared/util-data'
import {FormGroup} from '@angular/forms'
import {UpdateForm} from '../types'

export class UpdateFormBase<T extends Entity> extends FormGroup<
  UpdateForm<T>
> {}
