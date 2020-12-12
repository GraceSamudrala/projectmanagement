import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllocateListComponent } from './allocate-list.component';

const routes: Routes = [
  {
    path: '',
    component: AllocateListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllocateListRoutingModule { }
