import { Injectable } from '@angular/core';
import {Product} from "../../models/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44363/api/products';

  constructor(private http: HttpClient) {  }

  //CRUD

  getAllProducts(productType: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+'/'+productType);
  }
}
