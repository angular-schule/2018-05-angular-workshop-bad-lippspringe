import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  // TODO: Buch befüllen!
  @Input() book: Book;

  testDate = new Date('2018-05-07');

  constructor() { }

  ngOnInit() {
  }

}
