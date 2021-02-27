import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemporaryPassRoutingModule } from './temporary-pass-routing.module';
import { TemporaryPassComponent } from './temporary-pass.component';


@NgModule({
  declarations: [
    TemporaryPassComponent
  ],
  imports: [
    CommonModule,
    TemporaryPassRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TemporaryPassModule { }
