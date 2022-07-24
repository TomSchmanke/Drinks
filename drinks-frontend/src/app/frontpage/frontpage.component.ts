import { Component, OnInit } from '@angular/core';
import { UrlParameterServiceService } from '../services/url-parameter-service.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  initalBarCode!: string;

  constructor(
    private urlParameterService: UrlParameterServiceService
  ) { }

  ngOnInit(): void {
    this.initalBarCode = this.urlParameterService.barCodeParameter;
  }

  public submitLoginForm(event: string) {
    console.log('Submit Form with value: ' + event);
  }

  public createNewBar() {
    console.log('Create new Bar');
  }

}
