/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListDepartment } from '../models/success-response-list-department';
import { SuccessResponseDepartment } from '../models/success-response-department';
import { Department } from '../models/department';

/**
 * Department Controller
 */
@Injectable({
  providedIn: 'root',
})
class DepartmentControllerService extends __BaseService {
  static readonly getAllUsingGET2Path = '/departments';
  static readonly createUsingPOST2Path = '/departments';
  static readonly getByIdUsingGET2Path = '/departments/{id}';
  static readonly updateUsingPUT2Path = '/departments/{id}';
  static readonly deleteUsingDELETE2Path = '/departments/{id}';

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
  getAllUsingGET2Response(): __Observable<__StrictHttpResponse<SuccessResponseListDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/departments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListDepartment>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET2(): __Observable<SuccessResponseListDepartment> {
    return this.getAllUsingGET2Response().pipe(
      __map(_r => _r.body as SuccessResponseListDepartment)
    );
  }

  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST2Response(input: Department): __Observable<__StrictHttpResponse<SuccessResponseDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/departments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseDepartment>;
      })
    );
  }
  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST2(input: Department): __Observable<SuccessResponseDepartment> {
    return this.createUsingPOST2Response(input).pipe(
      __map(_r => _r.body as SuccessResponseDepartment)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET2Response(id: number): __Observable<__StrictHttpResponse<SuccessResponseDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/departments/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseDepartment>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET2(id: number): __Observable<SuccessResponseDepartment> {
    return this.getByIdUsingGET2Response(id).pipe(
      __map(_r => _r.body as SuccessResponseDepartment)
    );
  }

  /**
   * update
   * @param params The `DepartmentControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2Response(params: DepartmentControllerService.UpdateUsingPUT2Params): __Observable<__StrictHttpResponse<SuccessResponseDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/departments/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseDepartment>;
      })
    );
  }
  /**
   * update
   * @param params The `DepartmentControllerService.UpdateUsingPUT2Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT2(params: DepartmentControllerService.UpdateUsingPUT2Params): __Observable<SuccessResponseDepartment> {
    return this.updateUsingPUT2Response(params).pipe(
      __map(_r => _r.body as SuccessResponseDepartment)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE2Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/departments/${encodeURIComponent(id)}`,
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
  deleteUsingDELETE2(id: number): __Observable<null> {
    return this.deleteUsingDELETE2Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module DepartmentControllerService {

  /**
   * Parameters for updateUsingPUT2
   */
  export interface UpdateUsingPUT2Params {

    /**
     * input
     */
    input: Department;

    /**
     * id
     */
    id: number;
  }
}

export { DepartmentControllerService }
