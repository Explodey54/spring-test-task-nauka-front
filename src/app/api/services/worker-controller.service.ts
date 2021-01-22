/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListWorker } from '../models/success-response-list-worker';
import { SuccessResponseWorker } from '../models/success-response-worker';
import { Worker } from '../models/worker';

/**
 * Worker Controller
 */
@Injectable({
  providedIn: 'root',
})
class WorkerControllerService extends __BaseService {
  static readonly getAllUsingGET6Path = '/workers';
  static readonly createUsingPOST5Path = '/workers';
  static readonly getByIdUsingGET6Path = '/workers/{id}';
  static readonly updateUsingPUT5Path = '/workers/{id}';
  static readonly deleteUsingDELETE6Path = '/workers/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAll
   * @param params The `WorkerControllerService.GetAllUsingGET6Params` containing the following parameters:
   *
   * - `workday_month`: workday_month
   *
   * - `department`: department
   *
   * @return OK
   */
  getAllUsingGET6Response(params: WorkerControllerService.GetAllUsingGET6Params): __Observable<__StrictHttpResponse<SuccessResponseListWorker>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.workdayMonth != null) __params = __params.set('workday_month', params.workdayMonth.toString());
    if (params.department != null) __params = __params.set('department', params.department.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListWorker>;
      })
    );
  }
  /**
   * getAll
   * @param params The `WorkerControllerService.GetAllUsingGET6Params` containing the following parameters:
   *
   * - `workday_month`: workday_month
   *
   * - `department`: department
   *
   * @return OK
   */
  getAllUsingGET6(params: WorkerControllerService.GetAllUsingGET6Params): __Observable<SuccessResponseListWorker> {
    return this.getAllUsingGET6Response(params).pipe(
      __map(_r => _r.body as SuccessResponseListWorker)
    );
  }

  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST5Response(input: Worker): __Observable<__StrictHttpResponse<SuccessResponseWorker>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/workers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorker>;
      })
    );
  }
  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST5(input: Worker): __Observable<SuccessResponseWorker> {
    return this.createUsingPOST5Response(input).pipe(
      __map(_r => _r.body as SuccessResponseWorker)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET6Response(id: number): __Observable<__StrictHttpResponse<SuccessResponseWorker>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workers/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorker>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET6(id: number): __Observable<SuccessResponseWorker> {
    return this.getByIdUsingGET6Response(id).pipe(
      __map(_r => _r.body as SuccessResponseWorker)
    );
  }

  /**
   * update
   * @param params The `WorkerControllerService.UpdateUsingPUT5Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT5Response(params: WorkerControllerService.UpdateUsingPUT5Params): __Observable<__StrictHttpResponse<SuccessResponseWorker>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/workers/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorker>;
      })
    );
  }
  /**
   * update
   * @param params The `WorkerControllerService.UpdateUsingPUT5Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT5(params: WorkerControllerService.UpdateUsingPUT5Params): __Observable<SuccessResponseWorker> {
    return this.updateUsingPUT5Response(params).pipe(
      __map(_r => _r.body as SuccessResponseWorker)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE6Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/workers/${encodeURIComponent(id)}`,
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
  deleteUsingDELETE6(id: number): __Observable<null> {
    return this.deleteUsingDELETE6Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module WorkerControllerService {

  /**
   * Parameters for getAllUsingGET6
   */
  export interface GetAllUsingGET6Params {

    /**
     * workday_month
     */
    workdayMonth?: number;

    /**
     * department
     */
    department?: number;
  }

  /**
   * Parameters for updateUsingPUT5
   */
  export interface UpdateUsingPUT5Params {

    /**
     * input
     */
    input: Worker;

    /**
     * id
     */
    id: number;
  }
}

export { WorkerControllerService }
