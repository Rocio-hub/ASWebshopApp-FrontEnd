import { Injectable } from '@angular/core';
import {Customer} from "../../models/customer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { AuthenticationService } from "../auth-service/authentication.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
    })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44363/api/customers';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {  }



  //CRUD

  getCustomers(): Observable<Customer[]>{
    httpOptions.headers =
    httpOptions.headers.set('Authorization', 'Bearer' + this.authenticationService.getToken());
    //get users from api
    return this.http.get<Customer[]>(this.apiUrl, httpOptions);
  }

   addUser(customer: Customer): Observable<Customer>{
     return this.http.post<Customer>(this.apiUrl, customer);
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
