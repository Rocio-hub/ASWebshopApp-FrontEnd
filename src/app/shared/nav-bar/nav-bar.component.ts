import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/auth-service/authentication.service";
import {ProductListComponent} from "../../products/product-list/product-list.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  isLoggedIn: boolean;
  isAdmin: boolean;
  loggedCustomer: string;

  constructor(private authenticationService: AuthenticationService
              ) { }

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
    return this.authenticationService.getIsAuth();
  }

  getIsAdmin(): boolean {
    return this.authenticationService.getIsAdmin();
  }


}
