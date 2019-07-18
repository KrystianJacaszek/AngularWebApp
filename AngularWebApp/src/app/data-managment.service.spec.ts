import { TestBed } from '@angular/core/testing';

import { DataManagmentService } from './data-managment.service';

describe('DataManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataManagmentService = TestBed.get(DataManagmentService);
    expect(service).toBeTruthy();
  });
});
