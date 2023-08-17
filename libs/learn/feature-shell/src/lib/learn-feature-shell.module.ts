import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {learnFeatureShellRoutes} from './lib.routes'
import {LearnFeatureShellComponent} from './learn-feature-shell.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(learnFeatureShellRoutes),
    RouterModule,
  ],
  declarations: [LearnFeatureShellComponent],
})
export class LearnFeatureShellModule {}
