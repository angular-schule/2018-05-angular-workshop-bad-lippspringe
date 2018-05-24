import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {

    return this.http
      .get<Book[]>('https://api.angular.schule/secure/books')
      .pipe(
        retry(3),
        catchError(err => of([
          {
            isbn: '',
            title: 'Es gab ein Fehler, hier ist ein Ersatzbuch',
            description: '',
            rating: 0
          } ]))
      );
  }
}
