import { TestBed } from '@angular/core/testing';

import { ProdServiceService } from './prod-service.service';

describe('ProdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdServiceService = TestBed.get(ProdServiceService);
    expect(service).toBeTruthy();
  });
});
