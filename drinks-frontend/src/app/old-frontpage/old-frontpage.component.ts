import { Component, Input, OnInit } from '@angular/core';
import { DrinkModel } from '../models/drink-model';

@Component({
  selector: 'app-old-frontpage',
  templateUrl: './old-frontpage.component.html',
  styleUrls: ['./old-frontpage.component.scss']
})
export class OldFrontpageComponent implements OnInit {

  @Input() favourites!: DrinkModel[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
