import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.scss']
})
export class InviteFriendsComponent implements OnInit {

  @Input() barCode!: string;

  private baseUrl = "localhost:4200/drinks?barCode=";
  barCodeUrl!: string;
  getScreenWidth!: number;

  constructor() { }

  ngOnInit(): void {
    this.barCodeUrl = `${this.baseUrl}${this.barCode}`
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

}
