import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book): Book {

    let newBook = {
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      rating: book.rating
    };

    if (newBook.rating < 5) {
      newBook.rating++;
    }

    return newBook;
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: book.rating > 1 ? book.rating - 1 : book.rating
    };
  }

}
