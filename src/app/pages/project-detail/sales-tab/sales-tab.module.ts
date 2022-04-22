import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesTabRoutingModule } from './sales-tab-routing.module';
import { SalesTabComponent } from './sales-tab.component';


@NgModule({
  declarations: [SalesTabComponent],
  imports: [
    CommonModule,
    SalesTabRoutingModule
  ]
})
export class SalesTabModule { }
