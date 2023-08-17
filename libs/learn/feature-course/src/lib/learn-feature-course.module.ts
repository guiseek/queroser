import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {learnFeatureCourseRoutes} from './lib.routes'
import {LearnFeatureCourseComponent} from './learn-feature-course.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(learnFeatureCourseRoutes),
    RouterModule,
  ],
  declarations: [LearnFeatureCourseComponent],
})
export class LearnFeatureCourseModule {}
