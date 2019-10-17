import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private productId;
  private product;
  public quant = 1;
  constructor(private http:ProdServiceService, private route: ActivatedRoute, private router: Router,private cartS:CartService,private loginService:AuthenticationService) { }

  ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap) => {
     const id = parseInt(params.get('id'));
     this.productId = id;
   });
   this.http.getProductById(this.productId).subscribe(data => {
     this.product = data;
   })
  
  }
  addToC(prodId)
  {
    if(this.loginService.isUserLoggedIn()){
    this.cartS.addProduct(prodId).subscribe(data=>{
      alert(this.product.name +" has been added to the cart!");
    },(error=>{
      console.log(JSON.stringify(error));
    }))
  }
  else{
    alert("Please log in to add product in your cart");
  }
  }
}
