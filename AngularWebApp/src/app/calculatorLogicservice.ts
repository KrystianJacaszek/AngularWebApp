import { CaloriesModel } from './calories-model';
import { PersonData } from './person-data';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CalculatorLogicService {

  calcData =[];

  constructor() { }

   startLogic(sex, weight, height, age, fat, activityLevel){

    let personModel = new PersonData();

    personModel.sex=sex;
    personModel.weight=weight;
    personModel.height=height;
    personModel.age=age;
    personModel.fat=fat;
    personModel.activityLevel=activityLevel;

    this.saveData(personModel);

    return this.parsePersonModelToShow(personModel);

   }

  calcBmi(weight, height){

    return weight/(height*height);

  }

  calcHarrisBenedict(personModel){

    if(personModel.sex="male")
      return (66.5+(13.75*personModel.weight)+(5.003*personModel.height)-(6.775*personModel.age))
    else
      return (655.1+(9.563*personModel.weight)+(1.85-personModel.height)-(4.676*personModel.age))

  }

  calcMiffin(personModel){

    if(personModel.sex="male")
      return ((10*personModel.weight)+(6.25*personModel.height)-(5*personModel.age)+5)
    else
      return ((10*personModel.weight)+(6.25*personModel.height)-(5*personModel.age)-161)

  }

  calcMcCardle(personModel){

    return (21.6*((personModel.weight-(personModel.fat/100)*personModel.weight))+370);

  }

  loseWeight(caloriesPerDay){

    return (caloriesPerDay*0.9);

  }

  getWeight(caloriesPerDay){

    return (caloriesPerDay*1.1);

  }

  parsePersonModelToShow(personModel){

    let showArray=[];

    let HB=this.calcHarrisBenedict(personModel);
    let MF=this.calcMiffin(personModel);
    let MC=this.calcMcCardle(personModel);

    showArray.push({
      title:"Harris-Benedict",
      bmrKcal:HB,
      suggestKcal:this.useActivityLevel(HB, personModel.activityLevel),
      caloriesArray:this.parseCaloriesModel(this.useActivityLevel(HB, personModel.activityLevel))
    });

    showArray.push({
      title:"Mifflin - St Jeor ",
      bmrKcal:MF,
      suggestKcal:this.useActivityLevel(MF, personModel.activityLevel),
      caloriesArray:this.parseCaloriesModel(this.useActivityLevel(MF, personModel.activityLevel))
  });

    if(personModel.fat>0 && personModel.fat!=null)
    {
      showArray.push({
        title:"Katch-McCardle",
        bmrKcal:MC,
        suggestKcal:this.useActivityLevel(MC, personModel.activityLevel),
        caloriesArray:this.parseCaloriesModel(this.useActivityLevel(MC, personModel.activityLevel))
      });


    }
    console.log(showArray[0].caloriesArray.calorieKcal.carbohydrates);
    console.log(showArray[0].caloriesArray.calorieGrams.fats);
    console.log(showArray[0].suggestKcal);
    return showArray;

  }

  useActivityLevel(neededCalories, activityLevel){

    if(activityLevel== 0 || activityLevel == null)
      return neededCalories;
    else
      return neededCalories*activityLevel;

  }

  parseCaloriesModel(neededCalories){

    let entryKcal = new CaloriesModel();

    entryKcal.calories=neededCalories;
    entryKcal.carbohydrates=(neededCalories*0.55);
    entryKcal.proteins=(neededCalories*0.15);
    entryKcal.fats=(neededCalories*0.30)

    let entryGrams = new CaloriesModel();

    entryGrams.calories=entryKcal.calories;
    entryGrams.carbohydrates=entryKcal.carbohydrates/4;
    entryGrams.proteins=entryKcal.proteins/4;
    entryGrams.fats=entryKcal.fats/9;

    return {calorieKcal:entryKcal,
              calorieGrams:entryGrams};



  }

  saveData(personModel){
   this.calcData.push(personModel)
  }

   getData(){

    return this.calcData;

   }

    roundNumber(n, k)
{
    let factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}

  }

