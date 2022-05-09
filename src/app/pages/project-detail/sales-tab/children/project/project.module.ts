import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { ProjectComponent } from './project.component';
import { PropertyAddressComponent } from './property-address/property-address.component';
import { BerDetailsComponent } from './ber-details/ber-details.component';
import { ProjectPhotoComponent } from './project-photo/project-photo.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [PropertyDetailsComponent, ProjectComponent, PropertyAddressComponent, BerDetailsComponent, ProjectPhotoComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
