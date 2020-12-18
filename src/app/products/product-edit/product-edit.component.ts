import { Component, OnInit } from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product-service/product.service";
declare let alertify: any;

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})

export class ProductEditComponent implements OnInit {

  editProductForm: FormGroup;
  prod: Product;

  constructor(private  formBuilder: FormBuilder,
              private productService: ProductService) {
    this.create_form();
  }


  ngOnInit(): void {
  }

  create_form() {
    this.prod = JSON.parse(localStorage.getItem('prodToEdit'));
    this.editProductForm = this.formBuilder.group({
      name: [this.prod.name, Validators.required],
      typeName: [this.prod.typeName, Validators.required],
      price: [this.prod.price, Validators.required],
    })
  }

  updatedProduct() {
    this.prod.name = this.editProductForm.get('name').value;
    this.prod.typeName = this.editProductForm.get('typeName').value;
    this.prod.price = this.editProductForm.get('price').value;
    this.productService.updateProduct(this.prod);
    localStorage.removeItem('prodToEdit');
    alertify.success('Product updated successfully!');
  }
}
