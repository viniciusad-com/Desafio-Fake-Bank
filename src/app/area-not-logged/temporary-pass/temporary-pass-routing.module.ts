import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemporaryPassComponent } from './temporary-pass.component';

const routes: Routes = [{
  path: '',
  component: TemporaryPassComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemporaryPassRoutingModule { }
