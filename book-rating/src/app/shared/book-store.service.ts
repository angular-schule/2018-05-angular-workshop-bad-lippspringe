import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { catchError, retry } from 'rxjs/operators';
import { BookService } from '@angular-schule/book-monkey-api';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private bookService: BookService) { }

  getAll(): Observable<Book[]> {

    return this.bookService.booksGet();
  }
}
