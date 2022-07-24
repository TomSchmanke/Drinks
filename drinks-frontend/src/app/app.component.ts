import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlParameterService } from './services/url-parameter-service/url-parameter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  barCode!: string;

  constructor(
    public router: Router,
    private urlParameterService: UrlParameterService
  ) { 
    this.barCode = this.urlParameterService.barCodeParameter;
  }

}