import { TestBed } from '@angular/core/testing';

import { UrlParameterServiceService } from './url-parameter-service.service';

describe('UrlParameterServiceService', () => {
  let service: UrlParameterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlParameterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
