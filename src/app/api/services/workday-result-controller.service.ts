/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListWorkdayResult } from '../models/success-response-list-workday-result';
import { SuccessResponseWorkdayResult } from '../models/success-response-workday-result';
import { WorkdayResult } from '../models/workday-result';

/**
 * Workday Result Controller
 */
@Injectable({
  providedIn: 'root',
})
class WorkdayResultControllerService extends __BaseService {
  static readonly getAllUsingGET4Path = '/workday-results';
  static readonly createUsingPOST3Path = '/workday-results';
  static readonly getByIdUsingGET4Path = '/workday-results/{id}';
  static readonly updateUsingPUT3Path = '/workday-results/{id}';
  static readonly deleteUsingDELETE4Path = '/workday-results/{id}';

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
  getAllUsingGET4Response(): __Observable<__StrictHttpResponse<SuccessResponseListWorkdayResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workday-results`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListWorkdayResult>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET4(): __Observable<SuccessResponseListWorkdayResult> {
    return this.getAllUsingGET4Response().pipe(
      __map(_r => _r.body as SuccessResponseListWorkdayResult)
    );
  }

  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST3Response(input: WorkdayResult): __Observable<__StrictHttpResponse<SuccessResponseWorkdayResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/workday-results`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorkdayResult>;
      })
    );
  }
  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST3(input: WorkdayResult): __Observable<SuccessResponseWorkdayResult> {
    return this.createUsingPOST3Response(input).pipe(
      __map(_r => _r.body as SuccessResponseWorkdayResult)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET4Response(id: number): __Observable<__StrictHttpResponse<SuccessResponseWorkdayResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/workday-results/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorkdayResult>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET4(id: number): __Observable<SuccessResponseWorkdayResult> {
    return this.getByIdUsingGET4Response(id).pipe(
      __map(_r => _r.body as SuccessResponseWorkdayResult)
    );
  }

  /**
   * update
   * @param params The `WorkdayResultControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3Response(params: WorkdayResultControllerService.UpdateUsingPUT3Params): __Observable<__StrictHttpResponse<SuccessResponseWorkdayResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/workday-results/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseWorkdayResult>;
      })
    );
  }
  /**
   * update
   * @param params The `WorkdayResultControllerService.UpdateUsingPUT3Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT3(params: WorkdayResultControllerService.UpdateUsingPUT3Params): __Observable<SuccessResponseWorkdayResult> {
    return this.updateUsingPUT3Response(params).pipe(
      __map(_r => _r.body as SuccessResponseWorkdayResult)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE4Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/workday-results/${encodeURIComponent(id)}`,
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
  deleteUsingDELETE4(id: number): __Observable<null> {
    return this.deleteUsingDELETE4Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module WorkdayResultControllerService {

  /**
   * Parameters for updateUsingPUT3
   */
  export interface UpdateUsingPUT3Params {

    /**
     * input
     */
    input: WorkdayResult;

    /**
     * id
     */
    id: number;
  }
}

export { WorkdayResultControllerService }
