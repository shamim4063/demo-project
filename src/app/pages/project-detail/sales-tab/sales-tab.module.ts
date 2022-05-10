import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesTabRoutingModule } from './sales-tab-routing.module';
import { SalesTabComponent } from './sales-tab.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeftHostDirective } from './directives/left-host.directive';
import { SalesDefaultComponent } from './components/sales-default/sales-default.component';
import { SalesEstimateComponent } from './components/sales-estimate/sales-estimate.component';
import { SalesTabService } from './sales-tab.service';

@NgModule({
  declarations: [
    SalesTabComponent,
    LeftHostDirective,
    SalesDefaultComponent,
    SalesEstimateComponent,
  ],
  imports: [CommonModule, SalesTabRoutingModule, SharedModule],
  providers: [SalesTabService],
})
export class SalesTabModule {}
