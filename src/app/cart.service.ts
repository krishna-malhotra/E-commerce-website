import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  showCartItems()
  {
  
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});

    return this.http.get('http://localhost:2019/showCart',{headers});
  }
  decrease(prodId)
  {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get('http://localhost:2019/decreaseQuantity/'+prodId,{headers});
  }
  
  increase(prodId)
  {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get('http://localhost:2019/addToCart/'+prodId,{headers});
  }

  deleteProd(prodId)
  {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get('http://localhost:2019/deleteProduct/'+prodId,{headers});
  }
  
  addProduct(prodId)
  {
    
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get('http://localhost:2019/addToCart/'+prodId,{headers});
  }

}
