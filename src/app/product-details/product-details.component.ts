import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private productId;
  private product;
  public quant = 1;
  constructor(private http:ProdServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap) => {
     const id = parseInt(params.get('id'));
     this.productId = id;
   });
   this.http.getProductById(this.productId).subscribe(data => {
     this.product = data;
   })

  }

}
