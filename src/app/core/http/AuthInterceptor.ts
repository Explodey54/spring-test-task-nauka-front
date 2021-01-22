import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {AuthService} from "@core/auth/auth.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      setHeaders: {
        Authorization: this.getAuthorization()
      }
    })).pipe(catchError(i => this.handleAuthError(i)));
  }

  private getAuthorization(): string {
    const token = this.auth.token;
    return token ? `Bearer ${token}` : '';
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 403) {
      this.auth.logout();
      this.router.navigateByUrl(`/auth`);
      return of(err.message); // or EMPTY may be appropriate here
    }
    return throwError(err);
  }
}
