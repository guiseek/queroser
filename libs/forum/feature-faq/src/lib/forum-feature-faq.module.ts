import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {forumFeatureFaqRoutes} from './lib.routes'
import {ForumFeatureFaqComponent} from './forum-feature-faq.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(forumFeatureFaqRoutes),
    RouterModule,
  ],
  declarations: [ForumFeatureFaqComponent],
})
export class ForumFeatureFaqModule {}
