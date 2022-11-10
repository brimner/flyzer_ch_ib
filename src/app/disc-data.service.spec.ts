import { TestBed } from '@angular/core/testing';

import { DiscDataService } from './disc-data.service';

describe('DiscDataService', () => {
  let service: DiscDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
