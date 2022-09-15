import { TestBed } from '@angular/core/testing';

import { ProjectconfigService } from './projectconfig.service';

describe('ProjectconfigService', () => {
  let service: ProjectconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
