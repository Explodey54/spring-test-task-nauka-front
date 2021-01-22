import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators";
import {AuthControllerService} from "@api/services";
import {StorageService} from "@core/storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null = null;
  get isLoggedIn() {
    return !!this.token;
  }

  private readonly tokenStorageKey = 'nauka-token';

  constructor(
    private auth: AuthControllerService,
    private storage: StorageService
  ) {
    this.token = this.storage.get(this.tokenStorageKey);
  }

  login(username: string, password: string) {
    return this.auth.loginUsingPOST({username, password}).pipe(
      tap(i => this.saveToken(i.data?.token)));
  }

  logout() {
    this.token = null;
    this.storage.remove(this.tokenStorageKey);
  }

  private saveToken(token: string | undefined) {
    if (!token) return;
    this.storage.set(this.tokenStorageKey, token);
    this.token = token;
  }


}
