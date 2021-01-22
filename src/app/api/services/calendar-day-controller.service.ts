/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SuccessResponseListCalendarDay } from '../models/success-response-list-calendar-day';
import { SuccessResponseCalendarDay } from '../models/success-response-calendar-day';
import { CalendarDay } from '../models/calendar-day';

/**
 * Calendar Day Controller
 */
@Injectable({
  providedIn: 'root',
})
class CalendarDayControllerService extends __BaseService {
  static readonly getAllUsingGETPath = '/calendar-days';
  static readonly createUsingPOSTPath = '/calendar-days';
  static readonly getByIdUsingGETPath = '/calendar-days/{id}';
  static readonly updateUsingPUTPath = '/calendar-days/{id}';
  static readonly deleteUsingDELETEPath = '/calendar-days/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getAll
   * @param params The `CalendarDayControllerService.GetAllUsingGETParams` containing the following parameters:
   *
   * - `year`: year
   *
   * - `month`: month
   *
   * @return OK
   */
  getAllUsingGETResponse(params: CalendarDayControllerService.GetAllUsingGETParams): __Observable<__StrictHttpResponse<SuccessResponseListCalendarDay>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.year != null) __params = __params.set('year', params.year.toString());
    if (params.month != null) __params = __params.set('month', params.month.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/calendar-days`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseListCalendarDay>;
      })
    );
  }
  /**
   * getAll
   * @param params The `CalendarDayControllerService.GetAllUsingGETParams` containing the following parameters:
   *
   * - `year`: year
   *
   * - `month`: month
   *
   * @return OK
   */
  getAllUsingGET(params: CalendarDayControllerService.GetAllUsingGETParams): __Observable<SuccessResponseListCalendarDay> {
    return this.getAllUsingGETResponse(params).pipe(
      __map(_r => _r.body as SuccessResponseListCalendarDay)
    );
  }

  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOSTResponse(input: CalendarDay): __Observable<__StrictHttpResponse<SuccessResponseCalendarDay>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = input;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/calendar-days`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseCalendarDay>;
      })
    );
  }
  /**
   * create
   * @param input input
   * @return Created
   */
  createUsingPOST(input: CalendarDay): __Observable<SuccessResponseCalendarDay> {
    return this.createUsingPOSTResponse(input).pipe(
      __map(_r => _r.body as SuccessResponseCalendarDay)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<SuccessResponseCalendarDay>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/calendar-days/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseCalendarDay>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET(id: number): __Observable<SuccessResponseCalendarDay> {
    return this.getByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as SuccessResponseCalendarDay)
    );
  }

  /**
   * update
   * @param params The `CalendarDayControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUTResponse(params: CalendarDayControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<SuccessResponseCalendarDay>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.input;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/calendar-days/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuccessResponseCalendarDay>;
      })
    );
  }
  /**
   * update
   * @param params The `CalendarDayControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `input`: input
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT(params: CalendarDayControllerService.UpdateUsingPUTParams): __Observable<SuccessResponseCalendarDay> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as SuccessResponseCalendarDay)
    );
  }

  /**
   * delete
   * @param id id
   */
  deleteUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/calendar-days/${encodeURIComponent(id)}`,
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
  deleteUsingDELETE(id: number): __Observable<null> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CalendarDayControllerService {

  /**
   * Parameters for getAllUsingGET
   */
  export interface GetAllUsingGETParams {

    /**
     * year
     */
    year?: number;

    /**
     * month
     */
    month?: number;
  }

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {

    /**
     * input
     */
    input: CalendarDay;

    /**
     * id
     */
    id: number;
  }
}

export { CalendarDayControllerService }
