import { TestBed, inject } from '@angular/core/testing';

import { NavigationLibService } from './navigation-lib.service';

describe('NavigationLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationLibService]
    });
  });

  it('should be created', inject([NavigationLibService], (service: NavigationLibService) => {
    expect(service).toBeTruthy();
  }));
});
