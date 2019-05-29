import { TestBed } from '@angular/core/testing';

import { BatchRequestService } from './batch-request.service';

describe('BatchRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BatchRequestService = TestBed.get(BatchRequestService);
    expect(service).toBeTruthy();
  });
});
