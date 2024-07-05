/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAttestion } from '../fn/attestation-controller/get-attestion';
import { GetAttestion$Params } from '../fn/attestation-controller/get-attestion';

@Injectable({ providedIn: 'root' })
export class AttestationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAttestion()` */
  static readonly GetAttestionPath = '/api/attestation/pdf_genere/{idUser}/{idDemandeur}/{idDemande}/{idStructure}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAttestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttestion$Response(params: GetAttestion$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getAttestion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAttestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAttestion(params: GetAttestion$Params, context?: HttpContext): Observable<string> {
    return this.getAttestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
