import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor() { }

  calcBmi(weight, height){

    return weight/(height*height);

  }

  calcHarrisBenedict(sex, weight, height, age){

    if(sex="male")
      return (66.5+(13.75*weight)+(5.003*height)-(6.775*age))
    else
      return (655.1+(9.563*weight)+(1.85-height)-(4.676*age))

  }

  calcMiffin(sex, weight, height, age){

    if(sex="male")
      return ((10*weight)+(6.25*height)-(5*age)+5)
    else
      return ((10*weight)+(6.25*height)-(5*age)-161)

  }

  calcMcCardle(weight, fat){

    return (21.6*(fat*weight)+370);

  }

  loseWeight(caloriesPerDay){

    return (caloriesPerDay*0.9);

  }

  getWeight(caloriesPerDay){

    return (caloriesPerDay*1.1);

  }


}
