import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    ExercicioContadorComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    ExercicioContadorComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
