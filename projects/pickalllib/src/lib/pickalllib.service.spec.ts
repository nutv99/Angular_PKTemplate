import { TestBed } from '@angular/core/testing';

import { PickalllibService } from './pickalllib.service';

describe('PickalllibService', () => {
  let service: PickalllibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickalllibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
