import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyListComponent } from './faculty-list.component';
import { FacultyListRoutingModule } from './faculty-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FacultyListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FacultyListComponent
  ]
})
export class FacultyListModule { }
