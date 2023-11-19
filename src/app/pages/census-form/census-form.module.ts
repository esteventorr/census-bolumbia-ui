import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CensusFormRoutingModule } from './census-form-routing.module';
import { CensusFormComponent } from './census-form.component';


@NgModule({
  declarations: [
    CensusFormComponent
  ],
  imports: [
    CommonModule,
    CensusFormRoutingModule
  ]
})
export class CensusFormModule { }
