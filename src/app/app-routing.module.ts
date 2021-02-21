import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';



const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [EstaLogadoGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
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
