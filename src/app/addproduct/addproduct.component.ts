import { Component, OnInit } from '@angular/core';
import { product } from './products';
import { ProdServiceService } from '../prod-service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  private prod: product = new class implements product{
    name:string;
    price:string;
    image:string;
    details:string;
    category:string;
  }
  valid:boolean;
  constructor(private prodS:ProdServiceService) { }

  ngOnInit() {
  }
addProd(){
  if(this.prod.name!=null && this.prod.price!=null && this.prod.category!=null && this.prod.details!=null && this.prod.image!=null){
  this.prodS.addProduct(this.prod).subscribe(data=>{
    this.valid = true;
    this.ngOnInit();

  })
}
else{
  this.valid = false;
  alert("Fields can't be empty");
    }
  }
}
