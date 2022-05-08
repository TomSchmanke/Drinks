import { Component, OnInit, Input } from '@angular/core';
import { DrinkModel } from '../models/drink-model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  @Input() drink!: DrinkModel;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
