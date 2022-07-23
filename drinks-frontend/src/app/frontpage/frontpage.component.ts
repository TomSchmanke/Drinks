import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  initalBarCode!: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.initalBarCode = params['barId'];
    })
  }

  public submitLoginForm(event: string) {
    console.log('Submit Form with value: ' + event);
  }

  public createNewBar() {
    console.log('Create new Bar');
  }

}
