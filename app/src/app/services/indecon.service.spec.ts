import { TestBed } from '@angular/core/testing';

import { IndeconService } from './indecon.service';

describe('IndeconService', () => {
  let service: IndeconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndeconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
