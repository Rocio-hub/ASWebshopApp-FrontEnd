import { Injectable } from '@angular/core';
import {Customer} from "./models/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44363/api/customers';

  constructor(private http: HttpClient) {  }

  //CRUD

  addUser(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  getCustomers(): Observable<Customer[]>{
    //TODO call rest api later
    return this.http.get<Customer[]>
    (this.apiUrl);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(this.apiUrl+'/'+id);
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.apiUrl + '/' + customer.id, customer);
  }

  deleteCustomerById(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' +id);
  }

}
