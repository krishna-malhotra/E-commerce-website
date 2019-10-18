import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private  router:Router,private logS:AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree> |  Promise<boolean | UrlTree> | boolean | UrlTree
  {
      if(this.logS.isUserLoggedIn()){
      return true;
    }
    alert("You need to Log in First");
    this.router.navigate(['login']);
    return false;
  }
}
