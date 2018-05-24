import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.isbn$ = this.route.params.pipe(
      map(params => params.isbn)
    );
  }
}
