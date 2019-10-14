import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProdServiceService } from '../prod-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  private list
  constructor(private http: CartService, private router:Router) { }

  ngOnInit() {
    this.http.checkOut().subscribe(data=>{
      this.list = data;
    },(error=>{
      console.log("order history error "+ JSON.stringify(error));
    }))
  }
  seeD(prodId)
  {
    this.router.navigate(['product-detail',prodId]);
  }
}
