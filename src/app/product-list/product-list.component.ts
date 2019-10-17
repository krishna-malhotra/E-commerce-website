import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { RegisterService } from '../register.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private products;
  private url;
  private categ;
  private user:any;
  private role:string;
  private k:any;
  constructor(private _http: ProdServiceService, private route : ActivatedRoute, private router: Router,private cartS: CartService, private regS:RegisterService,private loginService:AuthenticationService) { }
  
  ngOnInit() {
   this.route.paramMap.subscribe( (params: ParamMap) => {
      const cat = params.get('category');
      this.categ = cat;
      if(this.categ === 'all')
      {
        this._http.getProducts().subscribe(data => { 
          console.log(data);
          this.products = data});
      }
      else{
        this._http.getProductsByCategory(this.categ).subscribe(data => { this.products = data});
      }
   })
   this.regS.getUser().subscribe(data=>{
     this.user = data;

   })
   this.regS.getUser().subscribe(data=>{
     this.k= data;
     this.role = this.k.role;
     
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
    if(this.loginService.isUserLoggedIn()){

      this.cartS.addProduct(prodId).subscribe((data) => console.log(data));
      alert("Product has been added to your cart");
    }
    else{
      alert("Please log in to add product in your cart");
    }

  
  }
  edit(product)
  {
    
    this.router.navigate(['editProductC', product.productId]);
  }
}
