import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTabRoutingModule } from './project-tab-routing.module';
import { ProjectTabComponent } from './project-tab.component';
import { SummaryComponent } from './summary/summary.component';
import { BerDetailsComponent } from './ber-details/ber-details.component';
import { BuildingComponent } from './building/building.component';


@NgModule({
  declarations: [ProjectTabComponent, SummaryComponent, BerDetailsComponent, BuildingComponent],
  imports: [
    CommonModule,
    ProjectTabRoutingModule
  ]
})
export class ProjectTabModule { }
