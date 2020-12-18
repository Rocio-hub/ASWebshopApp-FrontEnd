import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../shared/models/product";
import {Order} from "../shared/models/order";
import {Customer} from "../shared/models/customer";
import {OrderService} from "../shared/services/order-service/order.service";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as alertify from 'alertifyjs';


@Component({
  selector: 'my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})

export class MyCartComponent implements OnInit {

  prodInCart: boolean = false;
  prods: Product[];
  customerToDeliver: Customer;
  order: Order = new Order();
  orderDateTime: Date;
  deliveryDateTime: Date;
  delivAddressForm: FormGroup;
  customerLoggedIn: Customer;
  isLogged: boolean = false;
  sum: number;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private config: NgbAccordionConfig,
              private formBuilder: FormBuilder) {  }

  ngOnInit() {

    if (localStorage.getItem('currentCustomer') === null){
      this.isLogged = false;
      console.log(this.isLogged)
    }
    else{
      this.customerLoggedIn = JSON.parse(localStorage.getItem('currentCustomer'));
      this.isLogged = true;
      console.log(this.isLogged)
    }

    this.getProductsInCart();

    this.delivAddressForm = this.formBuilder.group({
      delivAddress: ['', Validators.required],
    });
  }

  getProductsInCart() {
    var products = localStorage.getItem("myCartList");
    this.prods = JSON.parse(products);
    this.sum = JSON.parse(localStorage.getItem("totalPrice"));
    if(this.sum>0)this.prodInCart = true;
  }

  confirmOrder() {
    this.getProductsInCart();
    this.customerToDeliver = JSON.parse(localStorage.getItem('currentCustomer'));
    this.orderDateTime = new Date();
    this.deliveryDateTime = new Date();
    this.deliveryDateTime.setDate(this.orderDateTime.getDate() + 2);
    this.order.orderDate = this.orderDateTime;
    this.order.deliveryDate = this.deliveryDateTime;
    this.order.deliveryAddress = this.delivAddressForm.get('delivAddress').value;
    this.order.customerId = this.customerToDeliver.id;
    this.order.products = this.prods;
    console.log(this.order.deliveryAddress)
    this.orderService.createNewOrder(this.order);
    alertify.confirm('Thank you for your purchase!').set('basic', true);
    this.removeProductsAfterBuy();
  }

  discAllProducts() {
    localStorage.removeItem("myCartList");
    this.getProductsInCart();
    this.prodInCart = false;
    localStorage.removeItem("totalPrice");
    this.sum =0;
    alertify.success('All products were discarded correctly');
  }

  removeProductsAfterBuy(){
    localStorage.removeItem("myCartList");
    this.getProductsInCart();
    this.prodInCart = false;
    this.sum = 0;
    this.delivAddressForm.reset();
    localStorage.removeItem("totalPrice");
  }
}
