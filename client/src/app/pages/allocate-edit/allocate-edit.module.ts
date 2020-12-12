import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllocateEditComponent } from './allocate-edit.component';
import { AllocateEditRoutingModule } from './allocate-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AllocateEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AllocateEditComponent
  ]
})
export class AllocateEditModule { }
