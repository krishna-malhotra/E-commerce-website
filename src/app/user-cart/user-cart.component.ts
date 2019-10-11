import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
import { CartService } from '../cart.service';
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  cartItemNum;
  quantityOfItem = 3;
  total = 0;
  private list;
  constructor(private _httpss: CartService) { }

  
  ngOnInit() {
   this._httpss.showCartItems().subscribe(data=>{
     this.list = data;
     this.cartItemNum=this.list.length;
     let total = 0;
     for(let i=0;i<this.list.length;i++)
     {
      
       total=total + Number(this.list[i].products.price) * Number(this.list[i].quantity);
     }
  this.total = total;
   },(error=>{
     console.log("error "+ JSON.stringify(error));
   }))
  }
 
  decQ(prodId){
      this._httpss.decrease(prodId).subscribe(data2=>{
        this._httpss.showCartItems().subscribe(data=>{
          this.list=data;
          this.cartItemNum=this.list.length;
          let total = 0;
          for(let i=0;i<this.list.length;i++)
          {
           
            total=total + Number(this.list[i].products.price) * Number(this.list[i].quantity);
          }
        
          this.total = total;
        })
      },(error=>{

        console.log("error in dec"+ JSON.stringify(error));
      }));
  }
  incQ(prodId)
  {
    this._httpss.increase(prodId).subscribe(dat =>{
      this._httpss.showCartItems().subscribe(data=>{
        this.list=data;
        this.cartItemNum=this.list.length;
        let total = 0;
        for(let i=0;i<this.list.length;i++)
        {
         
          total=total + Number(this.list[i].products.price) * Number(this.list[i].quantity);
        }
        this.total = total;
      })
    },(error=>{
      console.log("error in inc "+JSON.stringify(error));
    }))
  }
  delete(prodId)
  {
    this._httpss.deleteProd(prodId).subscribe(dataa=>{
      this._httpss.showCartItems().subscribe(data=>{
        console.log(data);
        this.list=data;
        this.cartItemNum=this.list.length;
        let total = 0;
        for(let i=0;i<this.list.length;i++)
        {
         
          total=total + Number(this.list[i].products.price) * Number(this.list[i].quantity);
        }
        this.total = total;
      })
    },(error=>{
      console.log("error "+JSON.stringify(error));
    }))
  }
}
