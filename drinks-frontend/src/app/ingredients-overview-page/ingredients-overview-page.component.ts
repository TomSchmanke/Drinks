import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../shared/ingredients.service';

@Component({
  selector: 'app-ingredients-overview-page',
  templateUrl: './ingredients-overview-page.component.html',
  styleUrls: ['./ingredients-overview-page.component.scss']
})
export class IngredientsOverviewPageComponent implements OnInit {

  availableIngredientsReduced: Array<Ingredient[]>;

  isUpdateMode = false;
  isDeleteMode = true;

  constructor(ingredientsService: IngredientsService) {
    this.availableIngredientsReduced = ingredientsService.getAllAvailableIngredientsReduced();
  }

  ngOnInit(): void {
  }

  getTotalAmmount(ingredients: Ingredient[]) {
    return ingredients.reduce((sum, current) => sum + current.ammount, 0);
  }

  onAddButton() {
    this.isUpdateMode = false;
    this.isDeleteMode = false;
  }

  onUpdateButton() {
    this.isUpdateMode = true;
    this.isDeleteMode = false;
  }

  onDeleteButton() {
    this.isUpdateMode = false;
    this.isDeleteMode = true;
  }


  onUpdate(ingredientList: Ingredient[]) {
    console.log(ingredientList);
  }

  onDelete(ingredientList: Ingredient[]) {
    console.log(ingredientList);
  }

}
