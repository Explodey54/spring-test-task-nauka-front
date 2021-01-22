import { TestBed } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "@core/auth/auth.service";
import {MockProviders} from "ng-mocks";
import spyOn = jest.spyOn;
import {Router} from "@angular/router";

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [...MockProviders(AuthService, Router)]
    });
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should pass if logged in', () => {
    const spy = spyOn(TestBed.inject(AuthService), 'isLoggedIn', 'get');
    spy.mockReturnValue(true);

    expect(guard.canActivate()).toEqual(true);
    expect(guard.canLoad()).toEqual(true);
  });

  it('should fail if not logged in', () => {
    const spy = spyOn(TestBed.inject(AuthService), 'isLoggedIn', 'get');
    spy.mockReturnValue(false);

    expect(guard.canActivate()).toEqual(false);
    expect(guard.canLoad()).toEqual(false);
  });

  it('should redirect to "auth" if not logged in', () => {
    const spyAuth = spyOn(TestBed.inject(AuthService), 'isLoggedIn', 'get');
    const spyRouter = spyOn(TestBed.inject(Router), 'navigate');
    spyAuth.mockReturnValue(false);

    guard.canActivate();

    expect(spyRouter).toHaveBeenCalledWith(['auth']);
  });
});
