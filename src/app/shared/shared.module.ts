import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [ProjectLayoutComponent],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
  ],
  exports: [
    ProjectLayoutComponent,
    NgxUiLoaderModule
  ]
})
export class SharedModule { }
