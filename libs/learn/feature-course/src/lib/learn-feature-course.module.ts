import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {learnFeatureCourseRoutes} from './learn-feature-course.routes'
import {LearnFeatureCourseComponent} from './learn-feature-course.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(learnFeatureCourseRoutes),
  ],
  declarations: [LearnFeatureCourseComponent],
})
export class LearnFeatureCourseModule {}
