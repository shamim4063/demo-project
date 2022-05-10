import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
    declarations: [
        CustomerComponent,
        CustomerTypeComponent,
        CustomerDetailsComponent,
    ],
    imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
