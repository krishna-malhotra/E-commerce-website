import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProdServiceService } from '../prod-service.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  product:any;
  private prodId;
  private name;
  private category;
  private price;
  private desc;
  constructor(private route:ActivatedRoute, private prodS: ProdServiceService,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      const id = parseInt(params.get('id'));
      this.prodId = id;
      console.log(this.prodId);
    })
    this.prodS.getProductById(this.prodId).subscribe(data=>{
      this.product = data;
      console.log(JSON.stringify(this.product));
      this.name = this.product.name;
      this.category = this.product.category;
      this.price = this.product.price;
      this.desc = this.product.details;
    })
  }
  editPr(){
    this.prodS.editProd(this.product).subscribe(data=>{
      this.product = data;
      this.router.navigate(['editProducrC',this.prodId]);
    })
  }
}
