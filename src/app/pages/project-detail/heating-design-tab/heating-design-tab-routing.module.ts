import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatingDesignTabComponent } from './heating-design-tab.component';

const routes: Routes = [
  {path: '', component: HeatingDesignTabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatingDesignTabRoutingModule { }
