import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService implements CanActivate, CanActivateChild {

  constructor(private authservice:AuthServiceService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | UrlTree{
    const owerData=localStorage.getItem('ownerid')

    if(owerData!=null){
   
        return true

     
    }
    this.router.navigateByUrl('/pagenotfound')
    return false
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree  {
    const owerData=localStorage.getItem('ownerid')
    if (owerData!=null) {
      return true
    }

    this.router.navigateByUrl('/pagenotfound')
    return false
  }

  

}
