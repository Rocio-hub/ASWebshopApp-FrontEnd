import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  jsonArray: string;

  //apiUrl = 'https://localhost:44363/api/orders';
  apiUrl = 'http://as-webshop-rtfft-easv.azurewebsites.net/api/orders';

  constructor(private http: HttpClient) { }

  //CRUD

  getAllOrders(customerId: number): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl+'/'+customerId);
  }
  createNewOrder(newOrder: Order) {
    return this.http.post<Order>(this.apiUrl, newOrder).subscribe();
  }
}
