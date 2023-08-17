import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'external',
        pathMatch: 'full',
      },
      // {
      //   path: 'external',
      //   canActivate: [NoAuthGuard],
      //   loadChildren: () => import('./external/external.module').then((m) => m.ExternalModule),
      // },
      {
        path: 'internal',
        // canActivate: [AuthGuard],
        loadChildren: () => import('./internal/internal.module').then((m) => m.InternalModule),
      },
      {
        path: '**',
        redirectTo: 'internal',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
