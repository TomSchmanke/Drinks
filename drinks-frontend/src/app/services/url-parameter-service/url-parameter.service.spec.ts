import { TestBed } from '@angular/core/testing';

import { UrlParameterService } from './url-parameter.service';

describe('UrlParameterServiceService', () => {
  let service: UrlParameterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlParameterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
