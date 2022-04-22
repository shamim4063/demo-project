import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTabComponent } from './sales-tab.component';

const routes: Routes = [
  {path: '', component: SalesTabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesTabRoutingModule { }
