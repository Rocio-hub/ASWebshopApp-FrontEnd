import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Order} from "../shared/models/order";
import {OrderService} from "../shared/services/order-service/order.service";

@Component({
  selector: 'app-customer-update',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.orderService.getAllOrders()
      .subscribe(listOfOrders => {
      this.orders = listOfOrders;
      });
  }

}
