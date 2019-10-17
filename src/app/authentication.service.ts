import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
 authenticate(username,password){
   console.log(username)
   const headers = new HttpHeaders({Authorization : 'Basic ' + btoa(username+':'+password)});
   return this.http.get('http://localhost:2019/loginUser', {headers}).pipe(
     map(data=>{
       sessionStorage.setItem('username',username);
       const authString = 'Basic ' + btoa(username+":"+password);
       sessionStorage.setItem('basicAuth',authString);
       console.log(data);
       return data;
     }
     ));
 }

 isUserLoggedIn()
 {
   const user = sessionStorage.getItem('username');
   return !(user===null);
 }
 logOut()
 {
   sessionStorage.removeItem('username');
   sessionStorage.removeItem('basicAuth');
 }
}
