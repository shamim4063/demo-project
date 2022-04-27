import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesEstimateRoutingModule } from './sales-estimate-routing.module';
import { SalesEstimateComponent } from './sales-estimate.component';
import { EstimateComponent } from './estimate/estimate.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SalesEstimateComponent, EstimateComponent],
  imports: [
    CommonModule,
    SalesEstimateRoutingModule,
    SharedModule
  ]
})
export class SalesEstimateModule { }
