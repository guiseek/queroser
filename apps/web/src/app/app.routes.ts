import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@queroser/learn/feature-shell').then(
        (m) => m.LearnFeatureShellModule
      ),
  },
]
