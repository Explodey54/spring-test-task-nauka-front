/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AutocompleteLong } from '../models/autocomplete-long';

/**
 * Autocomplete Controller
 */
@Injectable({
  providedIn: 'root',
})
class AutocompleteControllerService extends __BaseService {
  static readonly getCalendarDayStatusesUsingGETPath = '/autocomplete/calendar-day-status';
  static readonly getDepartmentsUsingGETPath = '/autocomplete/departments';
  static readonly getUsersUsingGETPath = '/autocomplete/users';
  static readonly getWorkdayResultStatusesUsingGETPath = '/autocomplete/workday-result-status';
  static readonly getWorkersUsingGETPath = '/autocomplete/workers';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getCalendarDayStatuses
   * @return OK
   */
  getCalendarDayStatusesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AutocompleteLong>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autocomplete/calendar-day-status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AutocompleteLong>>;
      })
    );
  }
  /**
   * getCalendarDayStatuses
   * @return OK
   */
  getCalendarDayStatusesUsingGET(): __Observable<Array<AutocompleteLong>> {
    return this.getCalendarDayStatusesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AutocompleteLong>)
    );
  }

  /**
   * getDepartments
   * @return OK
   */
  getDepartmentsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AutocompleteLong>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autocomplete/departments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AutocompleteLong>>;
      })
    );
  }
  /**
   * getDepartments
   * @return OK
   */
  getDepartmentsUsingGET(): __Observable<Array<AutocompleteLong>> {
    return this.getDepartmentsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AutocompleteLong>)
    );
  }

  /**
   * getUsers
   * @return OK
   */
  getUsersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AutocompleteLong>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autocomplete/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AutocompleteLong>>;
      })
    );
  }
  /**
   * getUsers
   * @return OK
   */
  getUsersUsingGET(): __Observable<Array<AutocompleteLong>> {
    return this.getUsersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AutocompleteLong>)
    );
  }

  /**
   * getWorkdayResultStatuses
   * @return OK
   */
  getWorkdayResultStatusesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AutocompleteLong>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autocomplete/workday-result-status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AutocompleteLong>>;
      })
    );
  }
  /**
   * getWorkdayResultStatuses
   * @return OK
   */
  getWorkdayResultStatusesUsingGET(): __Observable<Array<AutocompleteLong>> {
    return this.getWorkdayResultStatusesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AutocompleteLong>)
    );
  }

  /**
   * getWorkers
   * @return OK
   */
  getWorkersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<AutocompleteLong>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/autocomplete/workers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AutocompleteLong>>;
      })
    );
  }
  /**
   * getWorkers
   * @return OK
   */
  getWorkersUsingGET(): __Observable<Array<AutocompleteLong>> {
    return this.getWorkersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<AutocompleteLong>)
    );
  }
}

module AutocompleteControllerService {
}

export { AutocompleteControllerService }
