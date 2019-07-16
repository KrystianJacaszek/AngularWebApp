import { TestBed } from '@angular/core/testing';

import { CalculatorServiceService } from './calculator-service.service';

describe('CalculatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorServiceService = TestBed.get(CalculatorServiceService);
    expect(service).toBeTruthy();
  });
});
