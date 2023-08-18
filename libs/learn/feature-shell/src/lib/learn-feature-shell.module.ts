import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

import {learnFeatureShellRoutes} from './learn-feature-shell.routes'
import {LearnFeatureShellComponent} from './learn-feature-shell.component'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(learnFeatureShellRoutes),
    RouterModule,
  ],
  declarations: [LearnFeatureShellComponent],
})
export class LearnFeatureShellModule {}
