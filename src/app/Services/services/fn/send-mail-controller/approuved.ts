/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Demande } from '../../models/demande';
import { Demandeur } from '../../models/demandeur';
import { Structure } from '../../models/structure';
import { Utilisateur } from '../../models/utilisateur';

export interface Approuved$Params {
  d: Demandeur;
  dm: Demande;
  s: Structure;
      body: Utilisateur
}

export function approuved(http: HttpClient, rootUrl: string, params: Approuved$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, approuved.PATH, 'post');
  if (params) {
    rb.query('d', params.d, {});
    rb.query('dm', params.dm, {});
    rb.query('s', params.s, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

approuved.PATH = '/api/mail/mail_approuved';
