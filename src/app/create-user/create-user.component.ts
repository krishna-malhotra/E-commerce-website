import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { userTypes } from './userTypes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
 
  private user: userTypes  = new class implements userTypes{
    name:string;
     email:string;
    mobile:string;
     gender:string;
     password:string;
        user_id:number;
     active:boolean;
     role:string;
  }
  
  constructor(private register: RegisterService, private router: Router ){ }

  ngOnInit() {
  }
  alertUser()
  {
   this.register.addUsers(this.user).subscribe(data=>{
     alert("Registered!");
    this.router.navigate['login'];
   })
  }
}
