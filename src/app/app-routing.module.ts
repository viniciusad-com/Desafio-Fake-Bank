import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  } ,  { 
    path: 'login',
    component: LoginComponent}, {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'home/recovery-pass',
    component: RecoveryPassComponent
  }, {
    path: 'dashboard',
    component: DashComponent,
  }, {
    path: '**',
    component: PageNotFoundComponent
  }

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NaoEstaLogadoGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [EstaLogadoGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [EstaLogadoGuard],
  },
  {
    path: 'extrato',
    component: ExtratoComponent,
    canActivate: [EstaLogadoGuard],
  },
  {
    path: 'contatos',
    component: ContatosComponent,
    canActivate: [EstaLogadoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
    
export class AppRoutingModule { }
