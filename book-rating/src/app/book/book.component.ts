import { BookRatingService } from './../shared/book-rating.service';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;

  constructor(public rs: BookRatingService) { }

  rateUp() {
    this.book = this.rs.rateUp(this.book);
  }

  rateDown() {
    this.book = this.rs.rateDown(this.book);
  }
}
