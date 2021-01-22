/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListWorkdayResultStatus } from '../models/success-response-list-workday-result-status';
import { SuccessResponseWorkdayResultStatus } from '../models/success-response-workday-result-status';
import { WorkdayResultStatus } from '../models/workday-result-status';

/**
 * Workday Result Status Controller
 */
@Injectable({
  providedIn: 'root',
})
class WorkdayResultStatusControllerService extends __BaseService {
  static readonly getAllUsingGET5Path = '/workday-result-statuses';
  static readonly createUsingPOST4Path = '/workday-result-statuses';
  static readonly getByIdUsingGET5Path = '/workday-result-statuses/{id}';
  static readonly updateUsingPUT4Path = '/workday-result-statuses/{id}';
  static readonly deleteUsingDELETE5Path = '/workday-result-statuses/{id}';

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
  getAllUsingGET5Response(): __Observable<__StrictHttpResponse<SuccessResponseListWorkdayResultStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workday-result-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListWorkdayResultStatus>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET5(): __Observable<SuccessResponseListWorkdayResultStatus> {
    return this.getAllUsingGET5Response().pipe(
      __map(_r => _r.body as SuccessResponseListWorkdayResultStatus)
    );
  }

  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST4Response(input: WorkdayResultStatus): __Observable<__StrictHttpResponse<SuccessResponseWorkdayResultStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/workday-result-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorkdayResultStatus>;
      })
    );
  }
  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST4(input: WorkdayResultStatus): __Observable<SuccessResponseWorkdayResultStatus> {
    return this.createUsingPOST4Response(input).pipe(
      __map(_r => _r.body as SuccessResponseWorkdayResultStatus)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET5Response(id: number): __Observable<__StrictHttpResponse<SuccessResponseWorkdayResultStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workday-result-statuses/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorkdayResultStatus>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET5(id: number): __Observable<SuccessResponseWorkdayResultStatus> {
    return this.getByIdUsingGET5Response(id).pipe(
      __map(_r => _r.body as SuccessResponseWorkdayResultStatus)
    );
  }

  /**
   * update
   * @param params The `WorkdayResultStatusControllerService.UpdateUsingPUT4Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT4Response(params: WorkdayResultStatusControllerService.UpdateUsingPUT4Params): __Observable<__StrictHttpResponse<SuccessResponseWorkdayResultStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/workday-result-statuses/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorkdayResultStatus>;
      })
    );
  }
  /**
   * update
   * @param params The `WorkdayResultStatusControllerService.UpdateUsingPUT4Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT4(params: WorkdayResultStatusControllerService.UpdateUsingPUT4Params): __Observable<SuccessResponseWorkdayResultStatus> {
    return this.updateUsingPUT4Response(params).pipe(
      __map(_r => _r.body as SuccessResponseWorkdayResultStatus)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE5Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/workday-result-statuses/${encodeURIComponent(id)}`,
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
  deleteUsingDELETE5(id: number): __Observable<null> {
    return this.deleteUsingDELETE5Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module WorkdayResultStatusControllerService {

  /**
   * Parameters for updateUsingPUT4
   */
  export interface UpdateUsingPUT4Params {

    /**
     * input
     */
    input: WorkdayResultStatus;

    /**
     * id
     */
    id: number;
  }
}

export { WorkdayResultStatusControllerService }
