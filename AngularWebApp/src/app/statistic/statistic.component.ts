import { DataManagmentService } from './../data-managment.service';
import { CalculatorLogicService } from './../calculatorLogicservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor(private calcLogicService : CalculatorLogicService, private dataService : DataManagmentService) {
    }

    records=[]

    avgData;

  ngOnInit() {

    this.calcLogicService.getDataFromServer();

    this.records=this.calcLogicService.getData();

    this.avgData=this.calcLogicService.getAvgData();



  }

}
