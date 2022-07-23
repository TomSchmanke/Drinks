import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public imprintLink = "/";
  public contactLink = "/";
  public accessibilityLink = "/";
  public aboutLink = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
