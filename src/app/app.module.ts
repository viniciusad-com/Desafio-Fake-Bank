<<<<<<< HEAD
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
=======
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CountryListDetailComponent } from './country-list/country-list-detail/country-list-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { DashComponent } from './dash/dash.component';

registerLocaleData(localePt, 'pt');
=======
import { ContatosComponent } from './contatos/contatos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    LoginComponent,
    CountryListComponent,
    CountryListDetailComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    RecoveryPassComponent,
    DashComponent,
=======
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    ContatosComponent,
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt',
  }],
  bootstrap: [AppComponent],
=======
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
})
export class AppModule { }
