import { Component, OnInit } from '@angular/core'
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product-service/product.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, take, tap} from "rxjs/operators";
import {MyCartComponent} from "../../my-cart/my-cart.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  prods: Product[] = [];
  numberOfProductsInCart: number = 0;
  loading: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute){ }

  ngOnInit(): void {
  this.refresh();

    this.route.paramMap
      .pipe(
//        take(1),
        tap(params => {
          this.getAllProducts(params.get('productType'));
        })
      ).subscribe();

  }

  getAllProducts(productType: string){
  this.productService.getAllProducts(productType)
  .subscribe(listOfProducts => {
  this.products = listOfProducts;
  });
  }



  refresh(){
//nothing
  }

  addToCart(prodToAdd: Product) {
  this.prods.push(prodToAdd);
      localStorage.setItem("myCartList", JSON.stringify(this.prods));
  }


 /* addToCart(product: Product){
    localStorage.setItem('selectedProduct' + ++this.numberOfProductsInCart, JSON.stringify({
      id: product.id,
      name: product.name,
      type: product.typeName,
      price: product.price,
    }));
  } */

}
