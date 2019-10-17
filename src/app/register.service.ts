import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  editUser(user){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post('http://localhost:2019/editUser',user,{headers});
  }
  getUser(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get('http://localhost:2019/getUser',{headers}); 
  }
  logout(){
    const headers = new HttpHeaders({Authorization:sessionStorage.getItem('basicAuth')});
    return this.http.get('http://localhost:2019/logout',{headers});
  }
}
