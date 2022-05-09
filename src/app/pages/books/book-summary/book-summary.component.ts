import { Component, OnInit } from '@angular/core';
import {addBook, removeBook, retrievedBookList} from '../../../state/books.actions';
import {GoogleBooksService} from '../../../services/books.service';
import {Store} from '@ngrx/store';
import {selectBookCollection, selectBooks} from '../../../state/books.selectors';

@Component({
  selector: 'app-book-summary',
  templateUrl: './book-summary.component.html',
  styleUrls: ['./book-summary.component.scss']
})
export class BookSummaryComponent implements OnInit {

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

}
