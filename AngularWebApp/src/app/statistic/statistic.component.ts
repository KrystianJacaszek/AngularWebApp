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

    avgData;

  ngOnInit() {

    this.records=this.calcLogicService.getData();

    console.log(this.records);

    this.avgData=this.calcLogicService.getAvgData();

  }

}
