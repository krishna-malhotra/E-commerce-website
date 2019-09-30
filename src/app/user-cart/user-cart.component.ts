import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  cartItemNum = 10;
  quantityOfItem = 3;
  private list;
  constructor(private _httpss: ProdServiceService) { }

  
  ngOnInit() {
    this._httpss.getProducts().subscribe(data => {
      this.list = data;
      console.log(data);
    },(error => {
      console.log(error);
    })) 
  }
  decQ()
  {
    if(this.quantityOfItem>0)
    this.quantityOfItem-=1;
  }

}
