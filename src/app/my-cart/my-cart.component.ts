import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Order} from "../shared/models/order";

@Component({
  selector: 'app-customer-update',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  orders: Order[];

  constructor() {
  }

  ngOnInit() {
  }


}
