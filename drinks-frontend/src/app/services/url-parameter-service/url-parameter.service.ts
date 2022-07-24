import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlParameterService {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  public get barCodeParameter() : string {
    let barCode = "";
    this.activatedRoute.queryParams.subscribe(params => {
      barCode = params['barId'];
    })
    if (barCode === undefined) {
      barCode = "";
    }
    return barCode;
  }
  
}
