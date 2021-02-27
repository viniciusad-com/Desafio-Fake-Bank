import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home2Component } from './components/home2/home2.component';
import { Home3Component } from './components/home3/home3.component';
import { Home4Component } from './components/home4/home4.component';
import { Home5Component } from './components/home5/home5.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
