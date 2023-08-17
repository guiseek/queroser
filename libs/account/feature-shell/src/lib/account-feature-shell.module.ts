import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, RouterModule, Route} from '@angular/router'
import {accountFeatureShellRoutes} from './lib.routes'
import {AccountFeatureShellComponent} from './account-feature-shell.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountFeatureShellRoutes),
    RouterModule,
  ],
  declarations: [AccountFeatureShellComponent],
})
export class AccountFeatureShellModule {}
