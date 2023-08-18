import {
  FormBase,
  CreateFormBase,
  UpdateFormBase,
} from '@queroser/shared/ui-forms'
import {FormControl, Validators} from '@angular/forms'
import {Language} from '@queroser/learn/api-content'

export class LanguageForm extends FormBase<Language> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      side: new FormControl('', {
        nonNullable: true,
        validators: [],
      }),
    })
  }
}

export class CreateLanguageForm extends CreateFormBase<Language> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
      }),
      side: new FormControl(),
    })
  }
}

export class UpdateLanguageForm extends UpdateFormBase<Language> {
  constructor(value: Language) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      side: new FormControl('client', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })

    this.patchValue(value)
  }
}
