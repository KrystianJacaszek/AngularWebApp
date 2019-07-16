import { Component, OnInit } from '@angular/core';
import { CalculatorLogicService } from '../calculatorLogicservice';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor(private calcLogicService : CalculatorLogicService) { }

  showArray=[];

  selectedOption=0;
  calcGain=0;
  calcLose=0;
  calcAge=0;
  calcWeight=0;
  calcHeight=0
  calcSex="male";
  calcFat=0;

  chooseSex(sex){
    this.calcSex=sex;
  }

  calcCalories(){

    this.showArray=[];

    this.showArray=this.calcLogicService.startLogic(this.calcSex,this.calcWeight,this.calcHeight,this.calcAge,this.calcFat,this.selectedOption);

  }

  ngOnInit() {
  }

}
