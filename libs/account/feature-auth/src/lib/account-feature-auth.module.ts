import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {accountFeatureAuthRoutes} from './lib.routes'
import {AccountFeatureAuthComponent} from './account-feature-auth.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountFeatureAuthRoutes),
    RouterModule,
  ],
  declarations: [AccountFeatureAuthComponent],
})
export class AccountFeatureAuthModule {}
