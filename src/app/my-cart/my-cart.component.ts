import {Component, OnInit} from "@angular/core";
import { RouterModule } from '@angular/router';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "../shared/models/product";
import {ProductListComponent} from "../products/product-list/product-list.component";


@Component({
  selector: 'my-cart',
  templateUrl: './my-cart.component.html',
 // styleUrls: ['./my-cart.component.scss']
})

export class MyCartComponent implements OnInit {

  prods: Product[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductsInCart();
  }

  getProductsInCart() {
    var products = localStorage.getItem("myCartList");
    this.prods = JSON.parse(products);
  }

/* getProductsInCart(): Product {
    var numberOfProducts = localStorage.length;
    this.prod2 = (JSON.parse(localStorage.getItem('selectedProduct')));

    while(numberOfProducts>0) {
      this.prod1.id = this.prod2.id;
      this.prod1.name = this.prod2.name;
      this.prod1.typeName = this.prod2.typeName;
      this.prod1.price = this.prod2.price;
      numberOfProducts--;
    }
    return this.prod1;
  }*/
}
