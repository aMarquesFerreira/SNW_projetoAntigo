import { TestBed } from '@angular/core/testing';

import { TravelLineService } from './travel-lines.service';

describe('TraveLineService', () => {
  let service: TravelLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
