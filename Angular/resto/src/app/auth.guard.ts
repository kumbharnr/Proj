import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderDetailsService } from './services/order-details.service';

@Injectable({
  providedIn: 'root'
})

  
export class AuthGuard implements CanActivate {

  constructor(private authservice:OrderDetailsService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // if(localStorage.getItem('email')!=null){
    if(localStorage.getItem('email')==null && localStorage.getItem('pass')==null){
      alert('please login')
      this.router.navigate(['login'])
      return false
    }
    else{
      // alert("please login")
      return true
    }
  }
  
}
