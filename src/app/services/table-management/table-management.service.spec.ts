import { TestBed } from '@angular/core/testing';

import { TableManagementService } from './table-management.service';

describe('TableManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableManagementService = TestBed.get(TableManagementService);
    expect(service).toBeTruthy();
  });
});
