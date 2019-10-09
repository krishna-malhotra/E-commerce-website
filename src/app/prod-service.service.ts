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
  getProductsByCategory(cat)
  {
    
    return this.http.get('http://localhost:2019/allProducts/'+cat);
  }
  getProductById(id)
  {
    return this.http.get('http://localhost:2019/products/'+id);
  }
  getProductByCategAndPrice(cat,min,max)
  {
    return this.http.get('http://localhost:2019/allProducts/'+cat+'/'+min+'/'+max);
  }
  getByPrice(min,max)
  {
    return this.http.get('http://localhost:2019/allProducts/'+min+'/'+max);
  }
}
