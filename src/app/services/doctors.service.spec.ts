import { TestBed } from '@angular/core/testing';

import { DoctorsService } from './doctors.service';

describe('DoctorsService', () => {
  let service: DoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
