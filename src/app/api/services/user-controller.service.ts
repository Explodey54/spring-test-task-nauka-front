/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListUser } from '../models/success-response-list-user';
import { SuccessResponseUser } from '../models/success-response-user';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getAllUsingGET3Path = '/users';
  static readonly getByIdUsingGET3Path = '/users/{id}';
  static readonly deleteUsingDELETE3Path = '/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAll
   * @return OK
   */
  getAllUsingGET3Response(): __Observable<__StrictHttpResponse<SuccessResponseListUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListUser>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET3(): __Observable<SuccessResponseListUser> {
    return this.getAllUsingGET3Response().pipe(
      __map(_r => _r.body as SuccessResponseListUser)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET3Response(id: number): __Observable<__StrictHttpResponse<SuccessResponseUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${encodeURIComponent(id)}`,
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
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET3(id: number): __Observable<SuccessResponseUser> {
    return this.getByIdUsingGET3Response(id).pipe(
      __map(_r => _r.body as SuccessResponseUser)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE3Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/users/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE3(id: number): __Observable<null> {
    return this.deleteUsingDELETE3Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserControllerService {
}

export { UserControllerService }
