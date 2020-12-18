import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {ProductService} from "../../shared/services/product-service/product.service";
import {Product} from "../../shared/models/product";
import {ProductListComponent} from "../product-list/product-list.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../shared/models/customer";
declare let alertify: any;

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup;
  customerLoggedIn: Customer;
  isAdmin: boolean = false;
  newProduct: Product;
  url: File;
  fileName: string;
  files: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    //initalize the form group
      if (localStorage.getItem('currentCustomer') === null){
      this.isAdmin = false;
      }
      else{
        this.customerLoggedIn = JSON.parse(localStorage.getItem('currentCustomer'));
        this.isAdmin = this.customerLoggedIn.isAdmin;
      }
    this.addProductForm = this.formBuilder.group({
      prodName: ['', Validators.required],
      typeName: ['', Validators.required],
      price: ['', Validators.required],
      image: ['']
    });
  }

  addProduct(){
    this.newProduct = new Product();
    this.newProduct.name = this.addProductForm.get('prodName').value;
    this.newProduct.typeName = this.addProductForm.get('typeName').value;
    console.log(this.newProduct.typeName);
    this.newProduct.price = this.addProductForm.get('price').value;
    this.newProduct.imageUrl = this.files;
    console.log(this.newProduct.imageUrl);
    this.productService.addProduct(this.newProduct);
    this.resetForm();
    this.url=null;
    alertify.success('Product created successfully!');
  }

  resetForm() {
    this.addProductForm.reset();
  }

  onSelectFile(e) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.files = e.target.files[0].name;
      }
    }
  }
}
