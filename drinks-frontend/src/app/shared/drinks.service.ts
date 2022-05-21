import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { DrinkModel } from '../models/drink-model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  drinks: DrinkModel[];
  
  constructor() {
    this.drinks = [
      {
        category : Categories.UNFORGETTABLE,
        name : "Mojito",
        ingredients : ["4,5cl Weißer Kubanischer Rum", "2cl Limettensaft", "6 Minzblätter", "2 Barlöffel Rohrzucker", "4cl Sprudelwasser"],
        recipe : ["Minze, Zucker und Limettensaft vermischen", "Etwas Sodawasser hinzufügen und Glaß mit Eis auffüllen", "Rum hingeben und mit Wasser auffüllen", "Leicht umrühren"],
        toppings : ["Minzstängel", "Limttenscheiben"],
        favourite : true
      },
      {
        category : Categories.CLASSIC,
        name : "Cosmopolitan",
        ingredients : ["4cl Zitronenwodka", "1,5ml Cointreau", "1,5cl Limettensaft", "3cl Cranberrysaft"],
        recipe : ["Alle Zutaten auf Eis shaken", "In einem vorgekühlen Glaß servieren"],
        toppings : ["Zitronenzeste"],
        favourite : true
      },
      {
        category : Categories.CLASSIC,
        name : "Long Island Ice Tea",
        ingredients : ["1,5cl Vodka", "1,5cl Tequila", "1,5cl Weißer Rum", "1,5cl Cointreau", "3cl Zitronensaft", "2cl Sirup", "Cola"],
        recipe : ["Alle Zutaten mischen", "Auf Eis servieren"],
        toppings : ["Zitronenscheibe"],
        favourite : false
      },
      {
        category : Categories.UNFORGETTABLE,
        name : "Between the Sheets",
        ingredients : ["3cl Weißer Rum", "3cl Cognac", "3cl Tripel Sec", "2cl Zitronensaft"],
        recipe : ["Alle Zutaten auf Eis shaken", "In einem vorgekühlen Glaß servieren"],
        toppings : ["N/A"],
        favourite : false
      },
      {
        category : Categories.UNFORGETTABLE,
        name : "Clover Club",
        ingredients : ["4.5cl Gin", "1,5cl Himbeersirup", "1,5cl Zitronensaft", "Ein paar Tropfen Eiweiß"],
        recipe : ["Alle Zutaten auf Eis shaken", "In einem vorgekühlen Glaß servieren"],
        toppings : ["Himbeeren"],
        favourite : false
      },
      {
        category : Categories.NONIBA,
        name : "Kölsch",
        ingredients : ["0.33l Kölsch"],
        recipe : ["N/A"],
        toppings : ["N/A"],
        favourite : true
      }        
    ].sort((a,b) => a.name.localeCompare(b.name));
   }

   getAllDrinks(): DrinkModel[] {
     return this.drinks;
   }

   getFavoriteDrinks(): DrinkModel[] {
     return this.drinks.filter((a) => a.favourite).slice(0, 4);

   }
}
