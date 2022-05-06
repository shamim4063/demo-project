import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRecoverRoutingModule } from './password-recover-routing.module';
import { PasswordRecoverComponent } from './password-recover.component';


@NgModule({
  declarations: [
    PasswordRecoverComponent
  ],
  imports: [
    CommonModule,
    PasswordRecoverRoutingModule
  ]
})
export class PasswordRecoverModule { }
