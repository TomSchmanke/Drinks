import { TestBed } from '@angular/core/testing';

import { BarCodeService } from './bar-code.service';

describe('BarCodeService', () => {
  let service: BarCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
