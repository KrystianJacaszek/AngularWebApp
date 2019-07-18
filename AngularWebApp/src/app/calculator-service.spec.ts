import { TestBed } from '@angular/core/testing';

import { CalculatorLogicService } from './calculatorLogicservice';

describe('CalculatorLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorLogicService = TestBed.get(CalculatorLogicService);
    expect(service).toBeTruthy();
  });
});
