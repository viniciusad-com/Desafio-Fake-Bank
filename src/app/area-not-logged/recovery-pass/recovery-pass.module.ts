import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecoveryPassRoutingModule } from './recovery-pass-routing.module';
import { RecoveryPassComponent } from './recovery-pass.component';


@NgModule({
  declarations: [
    RecoveryPassComponent,
  ],
  imports: [
    CommonModule,
    RecoveryPassRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecoveryPassModule { }
