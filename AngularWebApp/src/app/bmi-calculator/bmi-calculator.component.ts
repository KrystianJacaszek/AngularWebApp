import { Range } from './../range';
import { from } from 'rxjs';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { CalculatorLogicService } from '../calculatorLogicservice';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { isNull, isString } from 'util';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})


export class BmiCalculatorComponent implements OnInit {

  constructor(private calcLogicService: CalculatorLogicService) { }

  showArray = [];

  rangeAge = new Range(15, 101);
  rangeWeight = new Range(45, 120);
  rangeHeight = new Range(150, 220);
  rangeFat = new Range(0, 50);

  isNotValid: boolean = false;

  selectedOption:number = 1;
  calcAge: number = 23;
  calcWeight: number = 74;
  calcHeight:number = 167
  calcSex:string = "male";
  calcFat:number = 8;

  isMale(statement:boolean) {
    if(statement)
      this.calcSex = "male";
    else
      this.calcSex="female"
  }

  calcCalories() {

    this.showArray = [];

    console.log('Height: ');
    console.log(this.calcHeight);

    console.log(this.calcSex);

    if (this.validateINputData()) {
      this.showArray = this.calcLogicService.startLogic(+this.calcSex, +this.calcWeight, +this.calcHeight, +this.calcAge, +this.calcFat, +this.selectedOption);
    }
    else{
      this.isNotValid=true;
      console.log("lipa");
    }


  }

  ngOnInit() {

  }

  validateINputData(){

    if (
        this.isNumberInRange(+this.calcAge, this.rangeAge) &&
        this.isNumberInRange(+this.calcHeight, this.rangeHeight) &&
        this.isNumberInRange(+this.calcWeight, this.rangeWeight) &&
        this.isNumberInRange(+this.calcFat, this.rangeFat)
        ) {
       return true;
    } else {
      return false;
    }



  }

  isNumberInRange(value: number, range: Range){

    if(isNull(value)) {
      return false;
    } else if (value >= range.min && value <= range.max) {
      return true;
    } else {
          return false;
    }
  }

}
