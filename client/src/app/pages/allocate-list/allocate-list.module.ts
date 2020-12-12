import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllocateListComponent } from './allocate-list.component';
import { AllocateListRoutingModule } from './allocate-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AllocateListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AllocateListComponent
  ]
})
export class AllocateListModule { }
