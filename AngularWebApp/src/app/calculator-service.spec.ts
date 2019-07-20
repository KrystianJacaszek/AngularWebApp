import { PersonData } from './person-data';
import { TestBed, async, inject } from '@angular/core/testing';

import { CalculatorLogicService } from './calculatorLogicservice';

describe('CalculatorLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorLogicService = TestBed.get(CalculatorLogicService);
    expect(service).toBeTruthy();
  });

  it('should be correct value', () => {
    const service: CalculatorLogicService = TestBed.get(CalculatorLogicService);
    expect(service.calcBmi(74,167)).toBe(26.53);
  });

  let personModel = new PersonData();
    personModel.age=23;
    personModel.weight=74;
    personModel.height=167;
    personModel.gender="male";
    personModel.fat=10;
    personModel.activityLevel=1;


  it('should be correct value BMR HB', () => {
    const service: CalculatorLogicService = TestBed.get(CalculatorLogicService);
    expect(service.calcHarrisBenedict(personModel)).toBe(1763.68);
  });

  it('should be correct value BMR MF', () => {
    const service: CalculatorLogicService = TestBed.get(CalculatorLogicService);
    expect(service.calcMiffin(personModel)).toBe(1673.75);
  });

  it('should be correct value VMR MC', () => {
    const service: CalculatorLogicService = TestBed.get(CalculatorLogicService);
    expect(service.calcMcCardle(personModel)).toBe(1840.53);
  });

})

