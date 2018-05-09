import { BookRatingService } from './../shared/book-rating.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let counter = 0;
  const ratingMock = {
    rateUp: () => { counter++; },
    rateDown: () => {},
    rateDownAllowed: () => {},
    rateUpAllowed: () => {},
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [{
        provide: BookRatingService,
        useValue: ratingMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // fill the @Input
    component.book = {
      isbn: '00',
      title: '',
      description: '',
      rating: 1
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should forward the rateUp call to the service', () => {
    counter = 0;
    component.rateUp();
    expect(counter).toBe(1);
  });


});
