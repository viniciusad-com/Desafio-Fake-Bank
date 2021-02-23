import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { CountryListDetailComponent } from './country-list/country-list-detail/country-list-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
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
    component: CountryListComponent,
  }, {
    path: 'home/:country',
    component: CountryListDetailComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
=======
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
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
