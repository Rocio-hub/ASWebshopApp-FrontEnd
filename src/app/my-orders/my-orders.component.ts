import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Order} from "../shared/models/order";
import {OrderService} from "../shared/services/order-service/order.service";
import {AuthenticationService} from "../shared/services/auth-service/authentication.service";


@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  idLogged: number;
  orders: Order[];
  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {  }

  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders(){
    this.idLogged = this.authenticationService.idLogged;
//    console.log( localStorage.getItem(this.idLogged));
    this.orderService.getAllOrders(this.idLogged) //(localStorage.getItem('id'))
      .subscribe(listOfOrders => {
      this.orders = listOfOrders;
      });
  }

}
