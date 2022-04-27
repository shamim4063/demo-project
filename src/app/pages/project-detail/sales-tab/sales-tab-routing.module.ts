import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTabComponent } from './sales-tab.component';

const routes: Routes = [
  {
    path: '', component: SalesTabComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTabRoutingModule { }
