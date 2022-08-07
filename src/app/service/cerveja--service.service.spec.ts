import { TestBed } from '@angular/core/testing';

import { CervejaServiceService } from './cerveja--service.service';

describe('CervejaServiceService', () => {
  let service: CervejaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CervejaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
