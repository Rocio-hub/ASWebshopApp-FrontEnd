import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product-service/product.service";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/operators";
import {Customer} from "../../shared/models/customer";
declare let alertify: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: Product[];
  prods: Product[] = [];
  numberOfProductsInCart: number = 0;
  loading;
  cust: Customer;
  confirmation: boolean;
  sum: number = 0;


  constructor(private productService: ProductService,
              private route: ActivatedRoute) {  }

  ngOnInit(): void {
     this.refresh();
  }

  getAllProducts(productType: string) {
    this.loading = true;
    this.productService.getAllProducts(productType)
      .subscribe(listOfProducts => {
        this.products = listOfProducts;
      });
    this.loading = false;
  }

  refresh() {
    this.loading = true;
    this.route.paramMap
      .pipe(
        tap(params => {
          this.getAllProducts(params.get('productType'));
        })
      ).subscribe();
    this.loading = false;
  }

  prodToAdd(prodToAdd: Product) {
    this.loading = true;
    this.prods.push(prodToAdd);
    localStorage.setItem("myCartList", JSON.stringify(this.prods));
    alertify.notify('Product added to your cart.', 'custom', 2, function () {
      console.log('dismissed');
    });
    this.sum += prodToAdd.price;
    localStorage.setItem("totalPrice", JSON.stringify(this.sum));
    console.log(this.sum)
    this.loading = false;
  }

  prodToEdit(prodToEdit: Product) {
    localStorage.setItem("prodToEdit", JSON.stringify(prodToEdit));
  }

  prodToDelete(prodToDelete: Product) {
    this.loading = true;
    this.runDeleteAlert();
    localStorage.setItem("prodToDelete", JSON.stringify(prodToDelete));
    this.productService.deleteProduct(prodToDelete.id);
    this.loading = false;
  }

  getIsAdmin(): boolean {
    if (JSON.parse(localStorage.getItem('currentCustomer'))) {
      this.cust = JSON.parse(localStorage.getItem('currentCustomer'));
      return this.cust.isAdmin;
    } else {
      return false;
    }
  }

  runDeleteAlert() {
    alertify.success('Product deleted successfully!');
  }
}
