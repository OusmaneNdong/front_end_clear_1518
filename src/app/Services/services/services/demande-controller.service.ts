/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { DemandeDto } from '../models/demande-dto';
import { demander } from '../fn/demande-controller/demander';
import { Demander$Params } from '../fn/demande-controller/demander';
import { findAll2 } from '../fn/demande-controller/find-all-2';
import { FindAll2$Params } from '../fn/demande-controller/find-all-2';
import { findAllDemande } from '../fn/demande-controller/find-all-demande';
import { FindAllDemande$Params } from '../fn/demande-controller/find-all-demande';
import { findByDemandeurId } from '../fn/demande-controller/find-by-demandeur-id';
import { FindByDemandeurId$Params } from '../fn/demande-controller/find-by-demandeur-id';
import { getById2 } from '../fn/demande-controller/get-by-id-2';
import { GetById2$Params } from '../fn/demande-controller/get-by-id-2';

@Injectable({ providedIn: 'root' })
export class DemandeControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `demander()` */
  static readonly DemanderPath = '/api/demande/demandez/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demander()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  demander$Response(params: Demander$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return demander(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demander$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  demander(params: Demander$Params, context?: HttpContext): Observable<number> {
    return this.demander$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllDemande()` */
  static readonly FindAllDemandePath = '/api/demande/getStatut/{statut}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllDemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllDemande$Response(params: FindAllDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeDto>>> {
    return findAllDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllDemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllDemande(params: FindAllDemande$Params, context?: HttpContext): Observable<Array<DemandeDto>> {
    return this.findAllDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DemandeDto>>): Array<DemandeDto> => r.body)
    );
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/api/demande/getDemande';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<DemandeDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DemandeDto>>): Array<DemandeDto> => r.body)
    );
  }

  /** Path part for operation `findByDemandeurId()` */
  static readonly FindByDemandeurIdPath = '/api/demande/findDemandeurById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByDemandeurId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDemandeurId$Response(params: FindByDemandeurId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeDto>>> {
    return findByDemandeurId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByDemandeurId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByDemandeurId(params: FindByDemandeurId$Params, context?: HttpContext): Observable<Array<DemandeDto>> {
    return this.findByDemandeurId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DemandeDto>>): Array<DemandeDto> => r.body)
    );
  }

  /** Path part for operation `getById2()` */
  static readonly GetById2Path = '/api/demande/demandeDetails/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById2$Response(params: GetById2$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeDto>> {
    return getById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById2(params: GetById2$Params, context?: HttpContext): Observable<DemandeDto> {
    return this.getById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeDto>): DemandeDto => r.body)
    );
  }

}
