import { BookRatingService } from './../shared/book-rating.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  const ratingMock = {
    rateUp: () => {},
    rateDownAllowed: () => {},
    rateUpAllowed: () => {},
  };

  beforeEach(async(() => {

    spyOn(ratingMock, 'rateUp');

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
    component.rateUp();
    expect(ratingMock.rateUp).toHaveBeenCalled();
    expect(ratingMock.rateUp).not.toHaveBeenCalledTimes(2);
  });
});
