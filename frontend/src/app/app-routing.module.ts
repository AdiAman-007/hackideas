import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/services/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [UserGuard]
  },
  {
    path: 'addChallenge',
    loadChildren: () => import('../modules/add-challenge/add-challenge.module').then(m => m.AddChallengeModule),
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserGuard]
})
export class AppRoutingModule { }
