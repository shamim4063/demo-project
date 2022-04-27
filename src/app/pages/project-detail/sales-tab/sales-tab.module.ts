import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesTabRoutingModule } from './sales-tab-routing.module';
import { SalesTabComponent } from './sales-tab.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SalesTabComponent],
  imports: [
    CommonModule,
    SalesTabRoutingModule,

    SharedModule
  ]
})
export class SalesTabModule { }
