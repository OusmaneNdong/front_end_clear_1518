/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approuved } from '../fn/send-mail-controller/approuved';
import { Approuved$Params } from '../fn/send-mail-controller/approuved';
import { rejeted } from '../fn/send-mail-controller/rejeted';
import { Rejeted$Params } from '../fn/send-mail-controller/rejeted';

@Injectable({ providedIn: 'root' })
export class SendMailControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `approuved()` */
  static readonly ApprouvedPath = '/api/mail/mail_approuved';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approuved()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approuved$Response(params: Approuved$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return approuved(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approuved$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  approuved(params: Approuved$Params, context?: HttpContext): Observable<string> {
    return this.approuved$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `rejeted()` */
  static readonly RejetedPath = '/api/mail/mail_rejete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rejeted()` instead.
   *
   * This method doesn't expect any request body.
   */
  rejeted$Response(params: Rejeted$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return rejeted(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rejeted$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rejeted(params: Rejeted$Params, context?: HttpContext): Observable<string> {
    return this.rejeted$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
