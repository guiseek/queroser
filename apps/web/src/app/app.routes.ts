import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'learn',
    loadChildren: () =>
      import('@queroser/learn/feature-shell').then(
        (m) => m.LearnFeatureShellModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'learn',
  },
]
