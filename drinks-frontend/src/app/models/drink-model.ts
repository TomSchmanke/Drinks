import { Categories } from "./categories";

export interface DrinkModel {
  category : Categories;
  name : string;
  ingredients : string[];
  recipe : string[];
  toppings: string [];
  favourite : boolean;
}
