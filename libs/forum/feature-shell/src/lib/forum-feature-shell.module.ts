import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {forumFeatureShellRoutes} from './lib.routes'
import {ForumFeatureShellComponent} from './forum-feature-shell.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(forumFeatureShellRoutes),
    RouterModule,
  ],
  declarations: [ForumFeatureShellComponent],
})
export class ForumFeatureShellModule {}
