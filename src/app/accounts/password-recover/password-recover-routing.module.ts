import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordRecoverComponent } from './password-recover.component';

const routes: Routes = [{ path: '', component: PasswordRecoverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordRecoverRoutingModule {}
