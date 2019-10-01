import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private products;
  private url;
  private categ;
  constructor(private _http: ProdServiceService, private route : ActivatedRoute) { }
  
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

}
