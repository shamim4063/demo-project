import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
  {
    path: '', component: ProjectDetailComponent,
    children: [
      { path: '', redirectTo: 'project-tab', pathMatch: 'full' },
      { path: 'project-tab', loadChildren: () => import('./project-tab/project-tab.module').then(m => m.ProjectTabModule) },
      { path: 'sales-tab', loadChildren: () => import('./sales-tab/sales-tab.module').then(m => m.SalesTabModule) },
      { path: 'heating-design-tab', loadChildren: () => import('./heating-design-tab/heating-design-tab.module').then(m => m.HeatingDesignTabModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule { }
