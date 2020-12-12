import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyEditComponent } from './faculty-edit.component';
import { FacultyEditRoutingModule } from './faculty-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FacultyEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FacultyEditComponent
  ]
})
export class FacultyEditModule { }
