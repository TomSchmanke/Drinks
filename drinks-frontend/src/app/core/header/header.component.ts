import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuOpen = false;
  public getScreenWidth: any;

  public drinksLink = "/";
  public ingredientsLink = "/";
  public ordersLink = "/";
  public barCode = "ABCDEFGHIJ";

  constructor() { }

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  openMenu() {
    this.menuOpen = !this.menuOpen
  }

}
