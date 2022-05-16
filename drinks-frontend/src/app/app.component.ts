import { Component } from '@angular/core';
import { Categories } from './models/categories';
import { DrinkModel } from './models/drink-model';
import { DrinksService } from './shared/drinks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  drinks : DrinkModel[];
  favourites: DrinkModel[];

  allCategories = Categories;

  constructor(drinkService: DrinksService) {
    this.drinks = drinkService.getAllDrinks();
    this.favourites = drinkService.getFavoriteDrinks();
  }

}