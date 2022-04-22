import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeatingDesignTabRoutingModule } from './heating-design-tab-routing.module';
import { HeatingDesignTabComponent } from './heating-design-tab.component';


@NgModule({
  declarations: [HeatingDesignTabComponent],
  imports: [
    CommonModule,
    HeatingDesignTabRoutingModule
  ]
})
export class HeatingDesignTabModule { }
