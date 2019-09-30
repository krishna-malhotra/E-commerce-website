import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  constructor(private http: HttpClient) { }
  getProducts()
  {
    return this.http.get('http://localhost:2019/allProducts');
  }
}
