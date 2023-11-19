import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CensusFormComponent } from './census-form.component';

const routes: Routes = [
  {
    path: '',
    component: CensusFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CensusFormRoutingModule {}
