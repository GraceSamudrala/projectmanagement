import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllocateEditComponent } from './allocate-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AllocateEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllocateEditRoutingModule { }
