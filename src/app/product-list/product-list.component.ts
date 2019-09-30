import { Component, OnInit } from '@angular/core';
import {ProdServiceService} from '../prod-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private products;
  constructor(private _http: ProdServiceService) { }

  ngOnInit() {
    this._http.getProducts().subscribe(data => {
      this.products = data;
    }, (error => {
      alert(error);
    }))
  }

}
