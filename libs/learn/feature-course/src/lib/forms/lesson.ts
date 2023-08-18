import {FormBase} from '@queroser/shared/ui-forms'
import {Lesson} from '@queroser/learn/api-course'
import {FormControl} from '@angular/forms'
import {CourseForm} from './course'

export class LessonForm extends FormBase<Lesson> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
      }),
      course: new CourseForm(),
    })
  }
}
