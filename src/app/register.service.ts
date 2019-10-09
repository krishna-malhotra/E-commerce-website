import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  
  constructor(private http: HttpClient) { }
  addUsers(user)
  {
    return this.http.post('http://localhost:2019/enterUsers',user);
  }
  

}
