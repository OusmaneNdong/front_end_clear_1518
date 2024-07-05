/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationRequest } from '../../models/registration-request';
import { Utilisateur } from '../../models/utilisateur';

export interface Registration$Params {
      body: RegistrationRequest
}

export function registration(http: HttpClient, rootUrl: string, params: Registration$Params, context?: HttpContext): Observable<StrictHttpResponse<Utilisateur>> {
  const rb = new RequestBuilder(rootUrl, registration.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Utilisateur>;
    })
  );
}

registration.PATH = '/api/utilisateur/register';
