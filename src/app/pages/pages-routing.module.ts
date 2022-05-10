import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      {
        path: 'projects',
        loadChildren: () =>
          import('./project-list/project-list.module').then(
            (m) => m.ProjectListModule
          ),
        data: { preload: true, delay: 1000 },
      },
      {
        path: 'project/:id',
        loadChildren: () =>
          import('./project-detail/project-detail.module').then(
            (m) => m.ProjectDetailModule
          ),
        data: { preload: true, delay: 1200 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
