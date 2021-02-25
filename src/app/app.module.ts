import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListDetailComponent } from './country-list/country-list-detail/country-list-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { Home2Component } from './shared/components/home2/home2.component';
import { Home3Component } from './shared/components/home3/home3.component';
import { Home4Component } from './shared/components/home4/home4.component';
import { Home5Component } from './shared/components/home5/home5.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CountryListComponent,
    CountryListDetailComponent,
    PageNotFoundComponent,
    FooterComponent,
    HomeComponent,
    RecoveryPassComponent,
    DashComponent,
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt',
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
