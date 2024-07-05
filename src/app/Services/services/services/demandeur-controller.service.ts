/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { DemandeurDto } from '../models/demandeur-dto';
import { findAll1 } from '../fn/demandeur-controller/find-all-1';
import { FindAll1$Params } from '../fn/demandeur-controller/find-all-1';
import { getById1 } from '../fn/demandeur-controller/get-by-id-1';
import { GetById1$Params } from '../fn/demandeur-controller/get-by-id-1';
import { getByNin } from '../fn/demandeur-controller/get-by-nin';
import { GetByNin$Params } from '../fn/demandeur-controller/get-by-nin';
import { getByStatus1 } from '../fn/demandeur-controller/get-by-status-1';
import { GetByStatus1$Params } from '../fn/demandeur-controller/get-by-status-1';
import { incription } from '../fn/demandeur-controller/incription';
import { Incription$Params } from '../fn/demandeur-controller/incription';
import { sendEmail1 } from '../fn/demandeur-controller/send-email-1';
import { SendEmail1$Params } from '../fn/demandeur-controller/send-email-1';
import { sendEmail2 } from '../fn/demandeur-controller/send-email-2';
import { SendEmail2$Params } from '../fn/demandeur-controller/send-email-2';

@Injectable({ providedIn: 'root' })
export class DemandeurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sendEmail1()` */
  static readonly SendEmail1Path = '/api/demandeur/send-email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendEmail1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendEmail1$Response(params: SendEmail1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return sendEmail1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendEmail1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendEmail1(params: SendEmail1$Params, context?: HttpContext): Observable<string> {
    return this.sendEmail1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `incription()` */
  static readonly IncriptionPath = '/api/demandeur/demander';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incription()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incription$Response(params: Incription$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return incription(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incription$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incription(params: Incription$Params, context?: HttpContext): Observable<string> {
    return this.incription$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getByStatus1()` */
  static readonly GetByStatus1Path = '/api/demandeur/getStatut/{statut}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByStatus1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByStatus1$Response(params: GetByStatus1$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
    return getByStatus1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByStatus1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByStatus1(params: GetByStatus1$Params, context?: HttpContext): Observable<DemandeurDto> {
    return this.getByStatus1$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeurDto>): DemandeurDto => r.body)
    );
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/api/demandeur/getDemandeur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeurDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<DemandeurDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DemandeurDto>>): Array<DemandeurDto> => r.body)
    );
  }

  /** Path part for operation `sendEmail2()` */
  static readonly SendEmail2Path = '/api/demandeur/envoie';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendEmail2()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendEmail2$Response(params?: SendEmail2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return sendEmail2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendEmail2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendEmail2(params?: SendEmail2$Params, context?: HttpContext): Observable<string> {
    return this.sendEmail2$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getByNin()` */
  static readonly GetByNinPath = '/api/demandeur/details/{nin}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByNin()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByNin$Response(params: GetByNin$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
    return getByNin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByNin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByNin(params: GetByNin$Params, context?: HttpContext): Observable<DemandeurDto> {
    return this.getByNin$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeurDto>): DemandeurDto => r.body)
    );
  }

  /** Path part for operation `getById1()` */
  static readonly GetById1Path = '/api/demandeur/demandeurDetails/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById1$Response(params: GetById1$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeurDto>> {
    return getById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById1(params: GetById1$Params, context?: HttpContext): Observable<DemandeurDto> {
    return this.getById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeurDto>): DemandeurDto => r.body)
    );
  }

}
