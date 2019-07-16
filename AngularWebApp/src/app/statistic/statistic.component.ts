import { CalculatorLogicService } from './../calculatorLogicservice';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private calcLogicService : CalculatorLogicService) {
    }

    records=[]


  ngOnInit() {

    this.records=this.calcLogicService.getData();

    console.log(this.records);

  }

}
