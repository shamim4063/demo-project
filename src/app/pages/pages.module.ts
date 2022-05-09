import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookCollectionComponent } from './books/book-collection/book-collection.component';
import { BookSummaryComponent } from './books/book-summary/book-summary.component';


@NgModule({
  declarations: [PagesComponent, BookListComponent, BookCollectionComponent, BookSummaryComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
