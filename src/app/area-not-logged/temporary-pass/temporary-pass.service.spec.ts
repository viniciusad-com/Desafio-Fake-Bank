import { TestBed } from '@angular/core/testing';

import { TemporaryPassService } from './temporary-pass.service';

describe('TemporaryPassService', () => {
  let service: TemporaryPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporaryPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
