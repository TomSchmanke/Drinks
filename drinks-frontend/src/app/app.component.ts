import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlParameterServiceService } from './services/url-parameter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  barCode!: string;

  constructor(
    public router: Router,
    private urlParameterService: UrlParameterServiceService
  ) { 
    this.barCode = this.urlParameterService.barCodeParameter;
    console.log(this.barCode)
  }

}