import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn: boolean = false;
  idLogged: number;

  //apiUrl = 'https://localhost:44363/api/token';
  apiUrl ='http://as-webshop-rtfft-easv.azurewebsites.net/api/token';

  constructor(private http: HttpClient) { }

  //login method will read the token value stored in the response. If successful: store the token in localstorage
  login(email: string, password: string): Observable<boolean>{
    return this.http.post<any>(
      this.apiUrl,{
        email, password
    })
      //if login is successful there will be a token in the response
      .pipe(map(response => {
        const token = response && response.token;
        if(token) {
          localStorage.setItem('currentCustomer', JSON.stringify({
            id: response.id,
            isAdmin: response.isAdmin,
            email: email,
            token: token,
          }));
     //     this.alertify.success('Login successful');
          this.isLoggedIn = true;
          this.idLogged = response.id;
          return true;
        } else {
      //    this.alertify.error('Something went wrong');
          this.isLoggedIn = false;
          return false;
        }
        }));
  }

  //read token from localstorage and return it
  getToken(): string{
    const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    return currentCustomer && currentCustomer.token;
  }

  //read email from localstorage the same way
  getEmail(): string{
    const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    return currentCustomer && currentCustomer.email;
  }

  getIsAdmin(): boolean{
    const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    return currentCustomer && currentCustomer.isAdmin;
  }

  //remove the current user from localstorage
  logout(): void{
    this.isLoggedIn = false;
    localStorage.removeItem('currentCustomer');
  }

  getIsAuth(): boolean{
    return this.isLoggedIn;
  }

}
