import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Route } from '@angular/compiler/src/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private http: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.http.logOut();
    this.router.navigate(['/login']);
  }

}
