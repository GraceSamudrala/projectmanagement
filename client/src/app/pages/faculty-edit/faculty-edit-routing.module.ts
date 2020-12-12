import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyEditComponent } from './faculty-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FacultyEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyEditRoutingModule { }
