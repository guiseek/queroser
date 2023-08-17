import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {accountFeatureUserRoutes} from './lib.routes'
import {AccountFeatureUserComponent} from './account-feature-user.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountFeatureUserRoutes),
    RouterModule,
  ],
  declarations: [AccountFeatureUserComponent],
})
export class AccountFeatureUserModule {}
