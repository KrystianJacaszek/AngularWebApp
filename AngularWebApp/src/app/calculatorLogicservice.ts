import { DataManagmentService } from './data-managment.service';
import { CaloriesModel } from './calories-model';
import { PersonData } from './person-data';

import { Injectable } from '@angular/core';
import { TemplateParseResult } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})


export class CalculatorLogicService {

  check : boolean =true;

  calcData =[];

  avarageData;

  constructor(private dataService: DataManagmentService) { }

   startLogic(gender, weight, height, age, fat, activityLevel){

    let personModel = new PersonData();

    personModel.gender=gender;
    personModel.weight=weight;
    personModel.height=height;
    personModel.age=age;
    personModel.fat=fat;
    personModel.activityLevel=activityLevel;

    let cache = this.parsePersonModelToShow(personModel);
    this.createToSaveData(personModel,cache);

    return cache;

   }

  calcBmi(weight, height){

    return this.roundNumber((weight/(height*height)*10000),2);

  }

  calcHarrisBenedict(personModel){

    if(personModel.gender="male")
      return this.roundNumber((66.5+(13.75*personModel.weight)+(5.003*personModel.height)-(6.775*personModel.age)),2)
    else
      return this.roundNumber((655.1+(9.563*personModel.weight)+(1.85-personModel.height)-(4.676*personModel.age)),2)

  }

  calcMiffin(personModel){

    if(personModel.gender="male")
      return this.roundNumber(((10*personModel.weight)+(6.25*personModel.height)-(5*personModel.age)+5),2)
    else
      return this.roundNumber(((10*personModel.weight)+(6.25*personModel.height)-(5*personModel.age)-161),2)

  }

  calcMcCardle(personModel){

    return this.roundNumber((21.6*((personModel.weight-(personModel.fat/100)*personModel.weight))+370),2)

  }

  parsePersonModelToShow(personModel){

    let showArray=[];

    let HB=this.calcHarrisBenedict(personModel);
    showArray.push({
      title:"Harris-Benedict",
      bmrKcal:HB,
      suggestKcal:this.useActivityLevel(HB, personModel.activityLevel),
      caloriesArray:this.parseCaloriesModel(this.useActivityLevel(HB, personModel.activityLevel))
    });

    let MF=this.calcMiffin(personModel);
    showArray.push({
      title:"Mifflin - St Jeor ",
      bmrKcal:MF,
      suggestKcal:this.useActivityLevel(MF, personModel.activityLevel),
      caloriesArray:this.parseCaloriesModel(this.useActivityLevel(MF, personModel.activityLevel))
  });

    if(personModel.fat>0 && personModel.fat!=null)
    {
      let MC=this.calcMcCardle(personModel);

      showArray.push({
        title:"Katch-McCardle",
        bmrKcal:MC,
        suggestKcal:this.useActivityLevel(MC, personModel.activityLevel),
        caloriesArray:this.parseCaloriesModel(this.useActivityLevel(MC, personModel.activityLevel))
      });


    }

    return showArray;

  }

  useActivityLevel(neededCalories, activityLevel){

    if(activityLevel== 0 || activityLevel == null)
      return neededCalories;
    else
      return this.roundNumber(neededCalories*activityLevel,2)

  }

  parseCaloriesModel(neededCalories){

    let entryKcal = new CaloriesModel();

    entryKcal.calories=neededCalories;
    entryKcal.carbohydrates=this.roundNumber((neededCalories*0.55),2)
    entryKcal.proteins=this.roundNumber((neededCalories*0.15),2)
    entryKcal.fats=this.roundNumber((neededCalories*0.30),2)

    let entryGrams = new CaloriesModel();

    entryGrams.calories=this.roundNumber(entryKcal.calories,2)
    entryGrams.carbohydrates=this.roundNumber((entryKcal.carbohydrates/4),2)
    entryGrams.proteins=this.roundNumber((entryKcal.proteins/4),2)
    entryGrams.fats=this.roundNumber((entryKcal.fats/9),2)

    return {calorieKcal:entryKcal,
              calorieGrams:entryGrams};



  }



  saveData(temp){

    this.dataService.insertAPIData(temp).subscribe((response)=>{
      console.log('response from post data is ', response);
    },(error)=>{
      console.log('error during post is ', error)
    })

  }

  createToSaveData(personModel,cache){

    let bmi = this.calcBmi(personModel.weight,personModel.height);
    let temp={
      person:personModel,
      bmi:bmi,
      bmr:cache[0].bmrKcal
      }

    this.calcData.push(temp)

    this.saveData(temp);

  }


  getDataFromServer(){
    if(this.check){
      this.dataService.getAPIData().subscribe((response)=>{

          for(let i =0; i <10; i++){
            this.calcData.push(response[i]);
          }
          console.log(this.calcData);
          },(error)=>{
            console.log('error during post is ', error)
          })
          this.check=false;
      }
  }

   getData(){

    return this.calcData;

   }

   countAvarageData(bigData){

    let avgAge=[];
    let avgHeight=[];
    let avgWeight=[];
    let avgBmi=[];
    let avgBmr=[];


    bigData.forEach(element => {

      avgAge.push(element.person.age);
      avgHeight.push(element.person.height);
      avgWeight.push(element.person.weight);
      avgBmi.push(element.bmi);
      avgBmr.push(element.bmr);

    });


    return {
      age:this.avgArr(avgAge),
      height:this.avgArr(avgHeight),
      weight:this.avgArr(avgWeight),
      bmi:this.avgArr(avgBmi),
      bmr:this.avgArr(avgBmr)
    }

  }

  checkNull(x){

    if(x>0 && x!=null && x!=undefined)
      return true;
    else
      return false;

  }

  avgArr(array){
    let index =0;
    let cache =0;
    array.forEach(element => {

      if(this.checkNull(element)){
        index++;
        cache+=+element;
      };
    });
    return this.roundNumber((cache/index),2);

  }

  getAvgData(){

    this.avarageData=this.countAvarageData(this.calcData);

    return this.avarageData;

  }

  roundNumber(n, k)
    {
        let factor = Math.pow(10, k);
        return Math.round(n*factor)/factor;
    }

  }

