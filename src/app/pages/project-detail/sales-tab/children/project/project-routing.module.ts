import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BerDetailsComponent } from './ber-details/ber-details.component';
import { ProjectPhotoComponent } from './project-photo/project-photo.component';
import { ProjectComponent } from './project.component';
import { PropertyAddressComponent } from './property-address/property-address.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
            { path: '', redirectTo: 'property-address', pathMatch: 'full' },
            { path: 'property-address', component: PropertyAddressComponent },
            { path: 'property-details', component: PropertyDetailsComponent },
            { path: 'ber-details', component: BerDetailsComponent },
            { path: 'property-photo', component: ProjectPhotoComponent },
            { path: 'project-details', component: ProjectDetailsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectRoutingModule {}
