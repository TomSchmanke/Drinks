import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarCodeService } from '../services/bar-code-service/bar-code.service';
import { UrlParameterService } from '../services/url-parameter-service/url-parameter.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  initalBarCode!: string;

  constructor(
    private router: Router,
    private urlParameterService: UrlParameterService,
    private barCodeService: BarCodeService
  ) { }

  ngOnInit(): void {
    this.initalBarCode = this.urlParameterService.barCodeParameter;
  }

  public submitLoginForm(event: string) {
    this.router.navigate(['/ingredients-overview'], { queryParams: { barId: event } });
  }

  public createNewBar() {
    const barCode = this.barCodeService.generateNewBarCode();
    this.router.navigate(['/ingredients-overview'], { queryParams: { barId: barCode } });
  }

}
