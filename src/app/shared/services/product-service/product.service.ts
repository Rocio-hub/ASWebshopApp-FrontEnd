import { Injectable } from '@angular/core';
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id: number;

  //apiUrl = 'https://localhost:44363/api/products';
    apiUrl = 'http://as-webshop-rtfft-easv.azurewebsites.net/api/products';

  constructor(private http: HttpClient) {  }

  //CRUD

  addProduct(newProduct: Product) {
    console.log(newProduct.imageUrl);
    return this.http.post<Product>(this.apiUrl, newProduct).subscribe();
  }

  getAllProducts(productType: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+'/'+productType);
  }
  updateProduct(updatedProduct: Product){
    return this.http.put<Product>(this.apiUrl+'/'+updatedProduct.id,updatedProduct).subscribe();
  }

  deleteProduct(id: number) {
    console.log('productservice');
  //  let productToDelete= JSON.parse(localStorage.getItem('prodToDelete'));
    //localStorage.removeItem('prodToDelete');
    //this.id = productToDelete.id.value;
    return this.http.delete<Product>(this.apiUrl+'/'+id).subscribe();
  }
}
