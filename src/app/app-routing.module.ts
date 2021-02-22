import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado.guard';



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
