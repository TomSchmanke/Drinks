import { Component, OnInit } from '@angular/core';
import { UrlParameterService } from '../services/url-parameter-service/url-parameter.service';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.scss']
})
export class DrinksPageComponent implements OnInit {

  currentBarCode = "";

  constructor(
    private urlParameterService: UrlParameterService
  ) { }

  ngOnInit(): void {
    this.currentBarCode = this.urlParameterService.barCodeParameter;
  }

}
