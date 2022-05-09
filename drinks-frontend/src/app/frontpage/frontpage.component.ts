import { Component, Input, OnInit } from '@angular/core';
import { DrinkModel } from '../models/drink-model';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  @Input() favourites!: DrinkModel[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
