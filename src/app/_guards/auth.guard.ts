import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthenticationService } from "../shared/services/auth-service/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  //decide whether a route can be activated or not
  canActivate() {
  //call the auth method in auth service to know if a user is logged
    if(this.authenticationService.getToken()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
