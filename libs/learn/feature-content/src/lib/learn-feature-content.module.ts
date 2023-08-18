import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {learnFeatureContentRoutes} from './lib.routes'
import {LearnFeatureContentComponent} from './learn-feature-content.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(learnFeatureContentRoutes),
  ],
  declarations: [LearnFeatureContentComponent],
})
export class LearnFeatureContentModule {}
