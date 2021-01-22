import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {AuthService} from "@core/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate() {
    return this.isLoggedIn();
  }
  canLoad() {
    return this.isLoggedIn();
  }

  private isLoggedIn() {
    const isLoggedIn = this.auth.isLoggedIn;
    if (!isLoggedIn) {
      this.router.navigate(['auth']);
    }
    return isLoggedIn;
  }
}
