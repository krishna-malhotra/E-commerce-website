import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  private list
  constructor(private http: CartService) { }

  ngOnInit() {
    this.http.checkOut().subscribe(data=>{
      this.list = data;
    },(error=>{
      console.log("order history error "+ JSON.stringify(error));
    }))
  }

}
