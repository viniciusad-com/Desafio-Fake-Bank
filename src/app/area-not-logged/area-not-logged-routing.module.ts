import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaNotLoggedComponent } from './area-not-logged.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '',
  component: AreaNotLoggedComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  }, {
    path: 'recovery-pass',
    loadChildren: () => import('./recovery-pass/recovery-pass.module').then(m => m.RecoveryPassModule),
  }, {
    path: 'temporary-pass',
    loadChildren: () => import('./temporary-pass/temporary-pass.module').then(m => m.TemporaryPassModule),
  },]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaNotLoggedRoutingModule { }
