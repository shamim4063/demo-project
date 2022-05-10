import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTabComponent } from './sales-tab.component';

const routes: Routes = [
  {
    path: '',
    component: SalesTabComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      {
        path: 'project',
        loadChildren: () =>
          import('./children/project/project.module').then(
            (m) => m.ProjectModule
          ),
        data: {
          parentComponent: 'default',
          preload: true,
          delay: 2000,
        },
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./children/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
        data: {
          parentComponent: 'default',
          preload: true,
          delay: 4000,
        },
      },
      {
        path: 'estimate',
        loadChildren: () =>
          import('./children/estimate/estimate.module').then(
            (m) => m.EstimateModule
          ),
        data: {
          parentComponent: 'estimate',
          preload: true,
          delay: 5000,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesTabRoutingModule {}
