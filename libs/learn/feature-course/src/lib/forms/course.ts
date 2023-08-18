import {
  FormBase,
  CreateFormBase,
  UpdateFormBase,
} from '@queroser/shared/ui-forms'
import {FormControl, Validators} from '@angular/forms'
import {Course} from '@queroser/learn/api-course'
import {LanguageForm} from './language'

export class CourseForm extends FormBase<Course> {
  constructor() {
    super({
      id: new FormControl(),
      name: new FormControl(),
      language: new LanguageForm(),
    })
  }
}

export class CreateCourseForm extends CreateFormBase<Course> {
  constructor() {
    super({
      name: new FormControl(),
      language: new LanguageForm(),
    })
  }
}

export class UpdateCourseForm extends UpdateFormBase<Course> {
  constructor(value: Course) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      language: new LanguageForm(),
    })

    this.patchValue(value)
  }
}
