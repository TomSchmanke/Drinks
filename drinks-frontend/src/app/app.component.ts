import { Component } from '@angular/core';
import { Categories } from './models/categories';
import { DrinkModel } from './models/drink-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drinks-frontend';
  allCategories = Categories;

  drinks : DrinkModel[] = [
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
      recipe : ["Alle Zutaten auf Eis shaken"],
      toppings : ["Zitronenzeste"],
      favourite : true
    },
    {
      category : Categories.CLASSIC,
      name : "Long Island Ice Tea",
      ingredients : ["1,5cl Vodka", "1,5cl Tequila", "1,5cl Weißer Rum", "1,5ml Cointreau", "3cl Zitronensaft", "2cl Sirup", "Cola"],
      recipe : ["Alle Zutaten mischen", "Auf Eis servieren"],
      toppings : ["Zitronenscheibe"],
      favourite : false
    }
  ].sort((a,b) => a.name.localeCompare(b.name));

  favourites = this.drinks.filter((a) => a.favourite).slice(0, 4);

}