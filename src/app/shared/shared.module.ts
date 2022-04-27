import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';



@NgModule({
  declarations: [ProjectLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectLayoutComponent
  ]
})
export class SharedModule { }
