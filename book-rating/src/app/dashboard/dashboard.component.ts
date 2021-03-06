import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ResizeService } from '../shared/resize.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // advanced angular
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  windowHeight: number;
  books: Book[] = [];

  constructor(private store: BookStoreService, public resize: ResizeService) {

    resize.onResize$.subscribe(size => this.windowHeight = size.innerHeight);
  }

  ngOnInit() {

    this.store.getAll()
      .subscribe(books => this.books = books);

  }

  sortBooks(book: Book) {

    // OPTION A
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);


    // OPTION B
    /*
    const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
    this.books = [...cleanedList, book]
      .sort((a, b) => b.rating - a.rating);
    */
  }

  addBook(book: Book) {
    this.books = [...this.books, book];
  }
}
