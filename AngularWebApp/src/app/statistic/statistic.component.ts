import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  inputBinding='app'
  inputDisableValue= false
  inputDisableValue2= false

  text="app"

  updateValue(e){
    this.text=e.target.value;
    console.log(e.target.value);

  }

  records = [
    {
      name: 'Ala',
      online: true
    },
    {
      name: 'Krystian',
      online: true
    },
    {
      name: 'Pawel',
      online: false
    },    {
      name: 'Krystian',
      online: true
    },
    {
      name: 'Pawel',
      online: false
    },    {
      name: 'Krystian',
      online: true
    },
    {
      name: 'Pawel',
      online: false
    },    {
      name: 'Krystian',
      online: true
    },
    {
      name: 'Pawel',
      online: false
    }
  ]

  constructor() {


    this.inputBinding=""
    this.inputDisableValue= false
    this.inputDisableValue2= false
    setInterval(()=>{
      this.inputBinding=Math.random().toString()
      this.inputDisableValue = Math.random() >0.5
      }, 500)


    }

    callMyFunction(){

      this.inputDisableValue2 = !this.inputDisableValue2;
      console.log("Function called")

    }





i = 0;
someVar = Math.random();

// doSomeHeavyTask() {
//   console.log(`Called ${this.i++} times`);
// }



  ngOnInit() {
    // setInterval(()=>{
    //   this.someVar = Math.random()
    // },100)


  }

}
