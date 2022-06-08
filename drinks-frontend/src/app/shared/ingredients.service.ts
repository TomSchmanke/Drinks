import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { UnitOfMeasurement } from '../models/unit-of-measurement';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  availableIngredients: Ingredient[];

  constructor() { 
    this.availableIngredients = [
      {
        name: "Weißer Rum",
        sub_name: "Barcadi Carta Blanca",
        ammount: 100,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Tequila",
        sub_name: "Sierra",
        ammount: 200,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Wodka",
        sub_name: "Grobatschow",
        ammount: 100,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Zitronenwodka",
        sub_name: "Grobatschow",
        ammount: 100,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Gin",
        sub_name: "Finsbury London Dry",
        ammount: 100,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Gin",
        sub_name: "Bombay Dry",
        ammount: 200,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Gin",
        sub_name: "Bombay Sapphire",
        ammount: 94,
        unit_of_measurement: UnitOfMeasurement.CL
      },
      {
        name: "Berliner Luft",
        sub_name: "Berliner Luft",
        ammount: 100,
        unit_of_measurement: UnitOfMeasurement.CL
      }
    ]
  }

  getAllAvailableIngredients(): Ingredient[] {
    return this.availableIngredients;
  }

  getAllAvailableIngredientsReduced() {
    const reducedIngredients: Array<Ingredient[]> = [];
    let currentIngredient: Ingredient;
    let currentIndex: number;

    for (let i = 0; i < this.availableIngredients.length; i++) {
      currentIngredient = this.availableIngredients[i];
      currentIndex = reducedIngredients.findIndex((objArr) => objArr[0].name === currentIngredient.name);
      if(currentIndex === -1) {
        reducedIngredients.push([currentIngredient]);
      } else {
        reducedIngredients[currentIndex].push(currentIngredient);
      }
    }
    return reducedIngredients;   
  }
}
