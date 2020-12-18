import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "../shared/models/order";
import {OrderService} from "../shared/services/order-service/order.service";
import {AuthenticationService} from "../shared/services/auth-service/authentication.service";
import {Customer} from "../shared/models/customer";

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  idLogged: number;
  orders: Order[];
  customerLoggedIn: Customer;
  isLogged: boolean = false;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {  }

  ngOnInit(): void {

    if (localStorage.getItem('currentCustomer') === null){
      this.isLogged = false;
    }
    else{
      this.customerLoggedIn = JSON.parse(localStorage.getItem('currentCustomer'));
      this.isLogged = true;
    }
    this.getAllOrders();
  }


  getAllOrders(){
    this.idLogged = this.authenticationService.idLogged;
//    console.log( localStorage.getItem(this.idLogged));
    this.orderService.getAllOrders(this.idLogged)
      .subscribe(listOfOrders => {
      this.orders = listOfOrders;
      });
  }
}
