import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private products;
  private url;
  private categ;
  constructor(private _http: ProdServiceService, private route : ActivatedRoute, private router: Router,private cartS: CartService) { }
  
  ngOnInit() {
   this.route.paramMap.subscribe( (params: ParamMap) => {
      const cat = params.get('category');
      this.categ = cat;
      if(this.categ === 'all')
      {
        this._http.getProducts().subscribe(data => { this.products = data});
      }
      else{
        this._http.getProductsByCategory(this.categ).subscribe(data => { this.products = data});
      }
   })
  }


  getProdByCat(category)
  {

    this._http.getProductsByCategory(category).subscribe(data => {
      this.products = data;
      console.log(data);
    }, (error => {
      alert(error);
    }))
  }
  viewProd(product)
  {
    this.router.navigate(['product-detail',product.productId]);
  }
  findByPriceAndCateg(min,max)
  {
    if(this.categ==='all')
    {
      this._http.getByPrice(min,max).subscribe(data => {
        this.products = data;
      })
    }
    else{
    this._http.getProductByCategAndPrice(this.categ,min,max).subscribe(data => {
      this.products = data;
    },(error => {
      console.log("find by price and cateh has error "+ error);
    }));
  }
  }
  addProd(prodId)
  {
    this.cartS.addProduct(prodId).subscribe((data) => console.log(data));
    alert("Product has been added to your cart");
  }
}
