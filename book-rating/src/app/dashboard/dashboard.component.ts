import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {
  }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, Fortgeschrittene..',
        rating: 5
      },
      {
        isbn: '111',
        title: 'AngularJS',
        description: 'Einführung in die..',
        rating: 3
      }
    ];
  }

}
