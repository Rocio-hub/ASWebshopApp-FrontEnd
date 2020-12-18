import { Component, OnInit } from '@angular/core';
import {Customer} from "../shared/models/customer";
import {CustomerService} from "../shared/services/customer-service/customer.service";
import {AuthenticationService} from "../shared/services/auth-service/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Animal Shelter Webshop - EASV2020';

  customers: Customer[];
  email: string;
  errorMessage: string = '';

  constructor(private customerService: CustomerService,
              private authenticationService: AuthenticationService)
  {
    this.email = authenticationService.getEmail();
  }

  ngOnInit() {  }

}
