import { Component, OnInit } from '@angular/core';
import { editUsers } from '../editUser';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userss : any;
  private name;
  private mobile;
  private email;
  private address;
  private password;
  private M;
  private E;
  private A;
  private G;
  private R;
  private N;
  constructor(private regS: RegisterService, private router:Router) { }

  ngOnInit() {
    this.regS.getUser().subscribe(data=>{

      this.userss = data;
      this.name = this.userss.name;
      this.address = this.userss.address;
      this.email = this.userss.email;
      this.mobile = this.userss.mobile;
      this.password = this.userss.password;
      this.M=this.userss.mobile;
      this.E= this.userss.email;
      this.A=this.userss.address;
      this.G=this.userss.gender;
      this.R = this.userss.role;
      this.N = this.userss.name;
      console.log(this.userss);
      
    })
  }
  editUser(){
    this.regS.editUser(this.userss).subscribe(data=>{
      this.ngOnInit();
    })
  }
}
