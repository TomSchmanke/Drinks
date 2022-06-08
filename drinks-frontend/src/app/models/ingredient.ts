import { UnitOfMeasurement } from "./unit-of-measurement";

export interface Ingredient {
  name: String;
  sub_name: String;
  ammount: number;
  unit_of_measurement: UnitOfMeasurement;
}
