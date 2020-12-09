import { Injectable } from '@angular/core';
import {User} from "./models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44363/api/customers';

  constructor(private http: HttpClient) {  }

  //CRUD

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

  getUsers(): Observable<User[]>{
    //TODO call rest api later
    return this.http.get<User[]>
    ('this.apiUrl');
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.apiUrl+'/'+id);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }

  deleteUserById(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' +id);
  }

}
