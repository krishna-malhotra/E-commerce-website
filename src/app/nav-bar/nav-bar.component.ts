import { Component, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { RegisterService } from '../register.service';
import { ProdServiceService } from '../prod-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user:any;
  isAdmin: string;
  private search:string;
  private result;
  @Output() private childEvent = new EventEmitter();
  constructor(private prodS: ProdServiceService, private regS:RegisterService, private loginService:AuthenticationService) { }

  ngOnInit() {
    this.regS.getUser().subscribe(data=>{
      this.user = data;
      this.isAdmin = this.user.role;
      console.log(this.isAdmin);

    })
  }
  getData()
  {
    console.log(this.search);
    if(this.search!=undefined && this.search!='')
    {
    this.prodS.getSearched(this.search).subscribe(data=>{
      this.result = data;
      this.childEvent.emit(this.result);
    })
  }
  }
}
