import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AreaNotLoggedRoutingModule } from './area-not-logged-routing.module';
import { AreaNotLoggedComponent } from './area-not-logged.component';


@NgModule({
  declarations: [AreaNotLoggedComponent],
  imports: [
    CommonModule,
    AreaNotLoggedRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AreaNotLoggedModule { }
