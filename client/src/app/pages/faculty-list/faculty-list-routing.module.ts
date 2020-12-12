import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyListComponent } from './faculty-list.component';

const routes: Routes = [
  {
    path: '',
    component: FacultyListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyListRoutingModule { }
