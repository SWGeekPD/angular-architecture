import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { UnauthorizedUserComponent } from './core/layout/unauthorized-user/unauthorized-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.module').then((m) => m.ContactModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'unauthorized',
    component: UnauthorizedUserComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
