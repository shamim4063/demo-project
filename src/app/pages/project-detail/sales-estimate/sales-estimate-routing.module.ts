import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateComponent } from './estimate/estimate.component';
import { SalesEstimateComponent } from './sales-estimate.component';

const routes: Routes = [{
  path: '', component: SalesEstimateComponent,
  children: [
    { path: '', redirectTo: 'estimate', pathMatch: 'full' },
    { path: 'estimate', component: EstimateComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesEstimateRoutingModule { }
