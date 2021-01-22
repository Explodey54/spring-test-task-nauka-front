/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseUser } from '../models/success-response-user';
import { SuccessResponseLoginResponse } from '../models/success-response-login-response';
import { LoginRequest } from '../models/login-request';
import { SuccessResponseRegisterResponse } from '../models/success-response-register-response';
import { RegisterRequest } from '../models/register-request';

/**
 * Auth Controller
 */
@Injectable({
  providedIn: 'root',
})
class AuthControllerService extends __BaseService {
  static readonly getCurrentUserUsingGETPath = '/auth';
  static readonly loginUsingPOSTPath = '/auth';
  static readonly createUserUsingPOSTPath = '/auth/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getCurrentUser
   * @return OK
   */
  getCurrentUserUsingGETResponse(): __Observable<__StrictHttpResponse<SuccessResponseUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseUser>;
      })
    );
  }
  /**
   * getCurrentUser
   * @return OK
   */
  getCurrentUserUsingGET(): __Observable<SuccessResponseUser> {
    return this.getCurrentUserUsingGETResponse().pipe(
      __map(_r => _r.body as SuccessResponseUser)
    );
  }

  /**
   * login
   * @param dto dto
   * @return OK
   */
  loginUsingPOSTResponse(dto: LoginRequest): __Observable<__StrictHttpResponse<SuccessResponseLoginResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseLoginResponse>;
      })
    );
  }
  /**
   * login
   * @param dto dto
   * @return OK
   */
  loginUsingPOST(dto: LoginRequest): __Observable<SuccessResponseLoginResponse> {
    return this.loginUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as SuccessResponseLoginResponse)
    );
  }

  /**
   * createUser
   * @param dto dto
   * @return OK
   */
  createUserUsingPOSTResponse(dto: RegisterRequest): __Observable<__StrictHttpResponse<SuccessResponseRegisterResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseRegisterResponse>;
      })
    );
  }
  /**
   * createUser
   * @param dto dto
   * @return OK
   */
  createUserUsingPOST(dto: RegisterRequest): __Observable<SuccessResponseRegisterResponse> {
    return this.createUserUsingPOSTResponse(dto).pipe(
      __map(_r => _r.body as SuccessResponseRegisterResponse)
    );
  }
}

module AuthControllerService {
}

export { AuthControllerService }
