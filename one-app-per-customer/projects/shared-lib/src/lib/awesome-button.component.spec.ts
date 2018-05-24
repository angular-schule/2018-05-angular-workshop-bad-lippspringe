import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeButtonComponent } from './awesome-button.component';

describe('AwesomeButtonComponent', () => {
  let component: AwesomeButtonComponent;
  let fixture: ComponentFixture<AwesomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
