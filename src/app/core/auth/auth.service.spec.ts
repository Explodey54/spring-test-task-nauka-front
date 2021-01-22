import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {endsWith} from "@test/http-predicates";
import {ApiModule} from "@api/api.module";

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ApiModule]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('login' , () => {
    it('should call /auth', () => {
      service.login('', '').subscribe();
      httpMock.expectOne(endsWith({ method: 'POST', url: '/auth' }));
    });

    it('should return observable that emits and completes on http success', done => {
      service.login('', '').subscribe({
        error: () => { throw new Error("Login observable returned error") },
        complete: () => done()
      });
      httpMock.expectOne(endsWith({ method: 'POST', url: 'auth' })).flush({});
    });

    it('should save token on http success', () => {
      service.login('', '').subscribe();
      const response = { data: { token: 'token123' }};
      httpMock.expectOne(endsWith({ method: 'POST', url: 'auth' })).flush(response);

      expect(service.token).toEqual('token123');
    });
  });


});
