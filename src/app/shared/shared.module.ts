import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BaseService } from './services/base.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectLayoutComponent],
  imports: [CommonModule, FormsModule, NgxUiLoaderModule],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ProjectLayoutComponent,
    NgxUiLoaderModule,
  ],
})
export class SharedModule {}
