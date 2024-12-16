import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

// const baseUrl="http://localhost:5171/api/Product";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUser(user:any):Observable<any>{
    return this.http.post('http://localhost:5003/api/User/Register',user);
  }
}
