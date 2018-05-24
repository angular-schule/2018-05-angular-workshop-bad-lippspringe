import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLibComponent } from './navigation-lib.component';

describe('NavigationLibComponent', () => {
  let component: NavigationLibComponent;
  let fixture: ComponentFixture<NavigationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
