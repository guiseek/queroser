import {Route} from '@angular/router'
import {LearnFeatureShellComponent} from './learn-feature-shell.component'

export const learnFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: LearnFeatureShellComponent,
    children: [
      {
        path: 'course',
        loadChildren: () =>
          import('@queroser/learn/feature-course').then(
            (m) => m.LearnFeatureCourseModule
          ),
      },
      {
        path: 'content',
        loadChildren: () =>
          import('@queroser/learn/feature-content').then(
            (m) => m.LearnFeatureContentModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'course',
      },
    ],
  },
]
