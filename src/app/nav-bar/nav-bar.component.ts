import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user:any;
  constructor(private loginService: AuthenticationService, private regS:RegisterService) { }

  ngOnInit() {
    this.regS.getUser().subscribe(data=>{
      this.user = data;

      console.log(this.user);
    })
  }

}
