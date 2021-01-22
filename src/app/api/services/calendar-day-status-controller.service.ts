/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListCalendarDayStatus } from '../models/success-response-list-calendar-day-status';
import { SuccessResponseCalendarDayStatus } from '../models/success-response-calendar-day-status';
import { CalendarDayStatus } from '../models/calendar-day-status';

/**
 * Calendar Day Status Controller
 */
@Injectable({
  providedIn: 'root',
})
class CalendarDayStatusControllerService extends __BaseService {
  static readonly getAllUsingGET1Path = '/calendar-day-statuses';
  static readonly createUsingPOST1Path = '/calendar-day-statuses';
  static readonly getByIdUsingGET1Path = '/calendar-day-statuses/{id}';
  static readonly updateUsingPUT1Path = '/calendar-day-statuses/{id}';
  static readonly deleteUsingDELETE1Path = '/calendar-day-statuses/{id}';

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
  getAllUsingGET1Response(): __Observable<__StrictHttpResponse<SuccessResponseListCalendarDayStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/calendar-day-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListCalendarDayStatus>;
      })
    );
  }
  /**
   * getAll
   * @return OK
   */
  getAllUsingGET1(): __Observable<SuccessResponseListCalendarDayStatus> {
    return this.getAllUsingGET1Response().pipe(
      __map(_r => _r.body as SuccessResponseListCalendarDayStatus)
    );
  }

  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST1Response(input: CalendarDayStatus): __Observable<__StrictHttpResponse<SuccessResponseCalendarDayStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/calendar-day-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseCalendarDayStatus>;
      })
    );
  }
  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST1(input: CalendarDayStatus): __Observable<SuccessResponseCalendarDayStatus> {
    return this.createUsingPOST1Response(input).pipe(
      __map(_r => _r.body as SuccessResponseCalendarDayStatus)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET1Response(id: number): __Observable<__StrictHttpResponse<SuccessResponseCalendarDayStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/calendar-day-statuses/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseCalendarDayStatus>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET1(id: number): __Observable<SuccessResponseCalendarDayStatus> {
    return this.getByIdUsingGET1Response(id).pipe(
      __map(_r => _r.body as SuccessResponseCalendarDayStatus)
    );
  }

  /**
   * update
   * @param params The `CalendarDayStatusControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1Response(params: CalendarDayStatusControllerService.UpdateUsingPUT1Params): __Observable<__StrictHttpResponse<SuccessResponseCalendarDayStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/calendar-day-statuses/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseCalendarDayStatus>;
      })
    );
  }
  /**
   * update
   * @param params The `CalendarDayStatusControllerService.UpdateUsingPUT1Params` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT1(params: CalendarDayStatusControllerService.UpdateUsingPUT1Params): __Observable<SuccessResponseCalendarDayStatus> {
    return this.updateUsingPUT1Response(params).pipe(
      __map(_r => _r.body as SuccessResponseCalendarDayStatus)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETE1Response(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/calendar-day-statuses/${encodeURIComponent(id)}`,
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
  deleteUsingDELETE1(id: number): __Observable<null> {
    return this.deleteUsingDELETE1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CalendarDayStatusControllerService {

  /**
   * Parameters for updateUsingPUT1
   */
  export interface UpdateUsingPUT1Params {

    /**
     * input
     */
    input: CalendarDayStatus;

    /**
     * id
     */
    id: number;
  }
}

export { CalendarDayStatusControllerService }
