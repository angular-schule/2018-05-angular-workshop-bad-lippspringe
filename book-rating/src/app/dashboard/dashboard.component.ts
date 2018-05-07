import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor() {
    window.setTimeout(() => this.books = ['Buch 3'], 2000);
  }

  ngOnInit() {
    this.books = ['Buch 1', 'Buch 2'];
  }

}
