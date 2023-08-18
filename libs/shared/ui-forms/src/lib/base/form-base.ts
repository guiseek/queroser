import {Entity} from '@queroser/shared/util-data'
import {FormGroup} from '@angular/forms'
import {EntityForm} from '../types'

export class FormBase<T extends Entity> extends FormGroup<
  EntityForm<T>
> {}
