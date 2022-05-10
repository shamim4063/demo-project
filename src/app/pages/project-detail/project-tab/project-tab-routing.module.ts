import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerDetailsComponent } from './ber-details/ber-details.component';
import { BuildingComponent } from './building/building.component';
import { ProjectTabComponent } from './project-tab.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectTabComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component: SummaryComponent },
      { path: 'ber-details', component: BerDetailsComponent },
      { path: 'building', component: BuildingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTabRoutingModule {}
