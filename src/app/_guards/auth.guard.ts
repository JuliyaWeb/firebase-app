import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private afService: AuthService) {
  }

  canActivate(){
    return this.afService.userIsLoggedIn();
  }
}
