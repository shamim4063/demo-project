import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'customer-type', pathMatch: 'full' },
      { path: 'customer-type', component: CustomerTypeComponent },
      { path: 'customer-details', component: CustomerDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
