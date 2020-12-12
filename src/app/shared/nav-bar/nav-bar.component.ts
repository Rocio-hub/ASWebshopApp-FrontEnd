import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/auth-service/authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  isLoggedIn: boolean;
  loggedCustomer: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedCustomer = localStorage.getItem('token');
    return this.loggedCustomer;
  }

  onLogout() {
    this.authenticationService.logout();
  }

  getIsAuth(): boolean{
    return this.authenticationService.isAuth();
  }


}
