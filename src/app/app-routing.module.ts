import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedGuard } from './shared/guards/is-logged/is-logged.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./area-not-logged/area-not-logged.module').then(m => m.AreaNotLoggedModule),
  // canActivate: [IsNotLoggedGuard]
}, {
  path: 'dashboard',
  loadChildren: () => import('./dash/dash.module').then(m => m.DashModule),
  canActivate: [IsLoggedGuard]
}, {
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
